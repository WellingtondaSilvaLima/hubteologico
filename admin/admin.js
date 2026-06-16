// ============================================================
//  CONFIGURAÇÕES - URLs do GitHub
// ============================================================
const GITHUB_USER = 'wellingtondasilvalima';
const GITHUB_REPO = 'hubteologico';
const GITHUB_BRANCH = 'main';
const DATA_FILE = 'data/content.json';

// ============================================================
//  CONFIGURAÇÕES DO OAUTH
// ============================================================
const GITHUB_CLIENT_ID = 'Ov23lieipc48wnsbkC3F';

// URL base do seu site (GitHub Pages)
const BASE_URL = `https://${GITHUB_USER}.github.io/${GITHUB_REPO}`;
const REDIRECT_URI = `${BASE_URL}/admin/callback.html`;

// ============================================================
//  ESTADO GLOBAL
// ============================================================
let content = { debates: [], videos: [], livros: {} };
let editingItem = null;
let editingType = null;
let githubToken = null;

// ============================================================
//  FUNÇÕES DE AUTENTICAÇÃO - OAUTH
// ============================================================

// Verificar se já está autenticado ao carregar a página
function checkAuth() {
    const authenticated = localStorage.getItem('github_oauth_authenticated');
    const user = localStorage.getItem('github_user');
    
    if (authenticated === 'true' && user === GITHUB_USER) {
        // Já está autenticado
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('adminContainer').classList.add('active');
        
        // Tentar carregar o token do localStorage
        githubToken = localStorage.getItem('github_token');
        
        // Se não tiver token, tentar obter via prompt
        if (!githubToken) {
            getTokenFromUser();
        }
        
        loadData();
        return true;
    }
    
    // Verificar se veio de callback (token recém-gerado)
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
        // Tem código, mas precisa trocar por token
        // Como não temos backend, vamos usar o fluxo alternativo
        handleOAuthCode(code);
        return true;
    }
    
    return false;
}

// Função para iniciar login com GitHub OAuth
function loginWithGitHub() {
    // Construir URL de autorização do GitHub
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo,workflow`;
    
    // Redirecionar para o GitHub
    window.location.href = authUrl;
}

// Função para lidar com o código de autorização
async function handleOAuthCode(code) {
    try {
        // Como estamos no frontend puro, não podemos expor o client_secret
        // Vamos usar uma abordagem diferente: o usuário fornece o token manualmente
        
        // Mostrar mensagem para o usuário
        const status = document.getElementById('loginStatus');
        if (status) {
            status.textContent = '✅ Autenticado com GitHub! Agora insira seu token de acesso.';
            status.style.color = '#00e676';
        }
        
        // Solicitar token ao usuário
        const token = prompt(
            'Autenticação com GitHub bem-sucedida!\n\n' +
            'Para editar o conteúdo, precisamos do seu Personal Access Token.\n' +
            'Crie um em: Settings → Developer settings → Personal access tokens\n\n' +
            'Escopos necessários: repo, workflow\n\n' +
            'Digite seu token:'
        );
        
        if (token) {
            localStorage.setItem('github_oauth_authenticated', 'true');
            localStorage.setItem('github_user', GITHUB_USER);
            localStorage.setItem('github_token', token);
            githubToken = token;
            
            // Recarregar a página
            window.location.href = 'index.html';
        }
        
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro na autenticação: ' + error.message);
    }
}

// Função para obter token do usuário (fallback)
function getTokenFromUser() {
    const token = prompt(
        'Digite seu GitHub Personal Access Token:\n\n' +
        'Crie um em: Settings → Developer settings → Personal access tokens\n' +
        'Escopos necessários: repo, workflow'
    );
    
    if (token) {
        localStorage.setItem('github_token', token);
        githubToken = token;
        return token;
    }
    return null;
}

// Função de login (botão "Entrar com GitHub")
function handleLogin(event) {
    if (event) event.preventDefault();
    
    // Em vez de usar usuário/senha, usar OAuth
    loginWithGitHub();
}

// Função de logout
function handleLogout() {
    if (confirm('Deseja realmente sair?')) {
        localStorage.removeItem('github_oauth_authenticated');
        localStorage.removeItem('github_user');
        // Não removemos o token para não ter que digitar de novo
        // localStorage.removeItem('github_token');
        
        document.getElementById('adminContainer').classList.remove('active');
        document.getElementById('loginContainer').style.display = 'block';
    }
}

// ============================================================
//  CARREGAR DADOS DO GITHUB
// ============================================================
async function loadData() {
    try {
        const url = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${DATA_FILE}`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error('Erro ao carregar dados');
        
        content = await response.json();
        renderAll();
        showStatus('✅ Dados carregados com sucesso!', 'success');
    } catch (error) {
        console.error('Erro:', error);
        showStatus('❌ Erro ao carregar dados', 'error');
    }
}

// ============================================================
//  SALVAR DADOS NO GITHUB (via GitHub API)
// ============================================================
async function saveToGitHub() {
    try {
        // Verificar se temos token
        if (!githubToken) {
            githubToken = await getToken();
        }
        
        // 1. Pegar o SHA atual do arquivo
        const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${DATA_FILE}`;
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        let sha = null;
        if (response.ok) {
            const data = await response.json();
            sha = data.sha;
        }
        
        // 2. Atualizar o arquivo
        const contentBase64 = btoa(unescape(encodeURIComponent(JSON.stringify(content, null, 2))));
        
        const payload = {
            message: `Atualização do conteúdo - ${new Date().toLocaleString()}`,
            content: contentBase64,
            branch: GITHUB_BRANCH
        };
        if (sha) payload.sha = sha;
        
        const saveResponse = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        if (!saveResponse.ok) {
            const errorData = await saveResponse.json();
            throw new Error(`Erro ao salvar: ${errorData.message || 'Erro desconhecido'}`);
        }
        
        showStatus('✅ Conteúdo salvo com sucesso no GitHub!', 'success');
        
        // Recarregar dados
        await loadData();
        
    } catch (error) {
        console.error('Erro:', error);
        showStatus('❌ Erro ao salvar: ' + error.message, 'error');
        
        // Se erro for de autenticação, limpar token e pedir novamente
        if (error.message.includes('401') || error.message.includes('Bad credentials')) {
            localStorage.removeItem('github_token');
            githubToken = null;
            alert('Token expirado ou inválido. Por favor, forneça um novo token.');
            await getToken();
        }
    }
}

// ============================================================
//  FUNÇÃO PARA PEGAR TOKEN
// ============================================================
async function getToken() {
    // Tentar do localStorage primeiro
    let token = localStorage.getItem('github_token');
    if (token) {
        githubToken = token;
        return token;
    }
    
    // Se não tiver, perguntar ao usuário
    token = prompt(
        'Digite seu GitHub Personal Access Token:\n\n' +
        'Crie um em: Settings → Developer settings → Personal access tokens\n' +
        'Escopos necessários: repo, workflow\n\n' +
        'Token:'
    );
    
    if (token) {
        localStorage.setItem('github_token', token);
        githubToken = token;
        return token;
    }
    
    throw new Error('Token necessário para salvar');
}

// ============================================================
//  RENDERIZAR DADOS NO PAINEL
// ============================================================
function renderAll() {
    renderDebates();
    renderVideos();
    renderLivros();
}

function renderDebates() {
    const container = document.getElementById('debatesList');
    if (!content.debates || content.debates.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">Nenhum debate cadastrado.</p>';
        return;
    }
    
    container.innerHTML = content.debates.map((item, index) => `
        <div class="item-card">
            <h4>${item.titulo}</h4>
            <div class="meta">Tema: ${item.tema} | Data: ${item.data}</div>
            <div class="meta">${item.resumo.substring(0, 100)}...</div>
            <div class="actions">
                <button class="btn-edit" onclick="editItem('debate', ${index})">✏️ Editar</button>
                <button class="btn-delete" onclick="deleteItem('debate', ${index})">🗑️ Excluir</button>
            </div>
        </div>
    `).join('');
}

function renderVideos() {
    const container = document.getElementById('videosList');
    if (!content.videos || content.videos.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">Nenhum vídeo cadastrado.</p>';
        return;
    }
    
    container.innerHTML = content.videos.map((item, index) => `
        <div class="item-card">
            <h4>${item.titulo}</h4>
            <div class="meta">Tema: ${item.tema}</div>
            <div class="meta">${item.descricao}</div>
            <div class="actions">
                <button class="btn-edit" onclick="editItem('video', ${index})">✏️ Editar</button>
                <button class="btn-delete" onclick="deleteItem('video', ${index})">🗑️ Excluir</button>
            </div>
        </div>
    `).join('');
}

function renderLivros() {
    const container = document.getElementById('livrosList');
    const livros = content.livros || {};
    const entries = Object.entries(livros);
    
    if (entries.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">Nenhum livro cadastrado.</p>';
        return;
    }
    
    container.innerHTML = entries.map(([nome, link], index) => `
        <div class="item-card">
            <h4>${nome}</h4>
            <div class="meta">🔗 ${link}</div>
            <div class="actions">
                <button class="btn-edit" onclick="editItem('livro', ${index})">✏️ Editar</button>
                <button class="btn-delete" onclick="deleteItem('livro', ${index})">🗑️ Excluir</button>
            </div>
        </div>
    `).join('');
}

// ============================================================
//  CRUD - OPERAÇÕES
// ============================================================
function editItem(type, index) {
    editingType = type;
    editingItem = index;
    
    let data = null;
    let title = '';
    
    if (type === 'debate') {
        data = content.debates[index];
        title = 'Editar Debate';
    } else if (type === 'video') {
        data = content.videos[index];
        title = 'Editar Vídeo';
    } else if (type === 'livro') {
        const entries = Object.entries(content.livros);
        data = { nome: entries[index][0], link: entries[index][1] };
        title = 'Editar Livro';
    }
    
    openModalWithData(type, data, title);
}

function deleteItem(type, index) {
    if (!confirm('Tem certeza que deseja excluir este item?')) return;
    
    if (type === 'debate') {
        content.debates.splice(index, 1);
    } else if (type === 'video') {
        content.videos.splice(index, 1);
    } else if (type === 'livro') {
        const entries = Object.entries(content.livros);
        const key = entries[index][0];
        delete content.livros[key];
    }
    
    renderAll();
    showStatus('🗑️ Item removido! Lembre-se de salvar.', 'success');
}

// ============================================================
//  MODAL
// ============================================================
function openModal(type) {
    editingType = type;
    editingItem = null;
    
    let title = '';
    let fields = '';
    
    if (type === 'debate') {
        title = 'Novo Debate';
        fields = `
            <div class="form-group">
                <label>Título</label>
                <input type="text" id="modal-titulo" placeholder="Título do debate">
            </div>
            <div class="form-group">
                <label>Tema</label>
                <input type="text" id="modal-tema" placeholder="Ex: Soteriologia">
            </div>
            <div class="form-group">
                <label>Data</label>
                <input type="date" id="modal-data">
            </div>
            <div class="form-group">
                <label>Resumo</label>
                <textarea id="modal-resumo" placeholder="Resumo do debate"></textarea>
            </div>
            <div class="form-group">
                <label>Conteúdo (HTML)</label>
                <textarea id="modal-conteudo" placeholder="Conteúdo em HTML" rows="10"></textarea>
            </div>
            <div class="form-group">
                <label>Livro Tema</label>
                <input type="text" id="modal-livro" placeholder="Nome do livro relacionado">
            </div>
        `;
    } else if (type === 'video') {
        title = 'Novo Vídeo';
        fields = `
            <div class="form-group">
                <label>Título</label>
                <input type="text" id="modal-titulo" placeholder="Título do vídeo">
            </div>
            <div class="form-group">
                <label>Tema</label>
                <input type="text" id="modal-tema" placeholder="Ex: História da Igreja">
            </div>
            <div class="form-group">
                <label>URL do YouTube (embed)</label>
                <input type="text" id="modal-url" placeholder="https://www.youtube.com/embed/...">
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <textarea id="modal-descricao" placeholder="Descrição do vídeo"></textarea>
            </div>
        `;
    } else if (type === 'livro') {
        title = 'Novo Livro';
        fields = `
            <div class="form-group">
                <label>Nome do Livro</label>
                <input type="text" id="modal-nome" placeholder="Nome do livro">
            </div>
            <div class="form-group">
                <label>Link da Amazon</label>
                <input type="text" id="modal-link" placeholder="https://amzn.to/...">
            </div>
        `;
    }
    
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = fields;
    document.getElementById('modal').classList.add('active');
}

function openModalWithData(type, data, title) {
    document.getElementById('modalTitle').textContent = title;
    
    let fields = '';
    
    if (type === 'debate') {
        fields = `
            <div class="form-group">
                <label>Título</label>
                <input type="text" id="modal-titulo" value="${data.titulo || ''}">
            </div>
            <div class="form-group">
                <label>Tema</label>
                <input type="text" id="modal-tema" value="${data.tema || ''}">
            </div>
            <div class="form-group">
                <label>Data</label>
                <input type="date" id="modal-data" value="${data.data || ''}">
            </div>
            <div class="form-group">
                <label>Resumo</label>
                <textarea id="modal-resumo">${data.resumo || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Conteúdo (HTML)</label>
                <textarea id="modal-conteudo" rows="10">${data.conteudo || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Livro Tema</label>
                <input type="text" id="modal-livro" value="${data.livroTema || ''}">
            </div>
        `;
    } else if (type === 'video') {
        fields = `
            <div class="form-group">
                <label>Título</label>
                <input type="text" id="modal-titulo" value="${data.titulo || ''}">
            </div>
            <div class="form-group">
                <label>Tema</label>
                <input type="text" id="modal-tema" value="${data.tema || ''}">
            </div>
            <div class="form-group">
                <label>URL do YouTube (embed)</label>
                <input type="text" id="modal-url" value="${data.url || ''}">
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <textarea id="modal-descricao">${data.descricao || ''}</textarea>
            </div>
        `;
    } else if (type === 'livro') {
        fields = `
            <div class="form-group">
                <label>Nome do Livro</label>
                <input type="text" id="modal-nome" value="${data.nome || ''}">
            </div>
            <div class="form-group">
                <label>Link da Amazon</label>
                <input type="text" id="modal-link" value="${data.link || ''}">
            </div>
        `;
    }
    
    document.getElementById('modalBody').innerHTML = fields;
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    editingItem = null;
    editingType = null;
}

function saveModal() {
    const type = editingType;
    
    if (type === 'debate') {
        const data = {
            id: content.debates.length + 1,
            titulo: document.getElementById('modal-titulo').value,
            tema: document.getElementById('modal-tema').value,
            data: document.getElementById('modal-data').value,
            resumo: document.getElementById('modal-resumo').value,
            conteudo: document.getElementById('modal-conteudo').value,
            livroTema: document.getElementById('modal-livro').value
        };
        
        if (editingItem !== null) {
            content.debates[editingItem] = data;
        } else {
            content.debates.push(data);
        }
    } else if (type === 'video') {
        const data = {
            id: content.videos.length + 1,
            titulo: document.getElementById('modal-titulo').value,
            tema: document.getElementById('modal-tema').value,
            url: document.getElementById('modal-url').value,
            descricao: document.getElementById('modal-descricao').value
        };
        
        if (editingItem !== null) {
            content.videos[editingItem] = data;
        } else {
            content.videos.push(data);
        }
    } else if (type === 'livro') {
        const nome = document.getElementById('modal-nome').value;
        const link = document.getElementById('modal-link').value;
        
        if (editingItem !== null) {
            const entries = Object.entries(content.livros);
            const oldKey = entries[editingItem][0];
            delete content.livros[oldKey];
            content.livros[nome] = link;
        } else {
            content.livros[nome] = link;
        }
    }
    
    closeModal();
    renderAll();
    showStatus('✅ Item salvo! Lembre-se de salvar todas as alterações.', 'success');
}

// ============================================================
//  FUNÇÕES AUXILIARES
// ============================================================
function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');
}

function showStatus(msg, type) {
    const el = document.getElementById('statusMsg');
    el.textContent = msg;
    el.className = `status-msg ${type}`;
    setTimeout(() => {
        el.className = 'status-msg';
    }, 5000);
}

// ============================================================
//  SALVAR TUDO
// ============================================================
async function saveAll() {
    await saveToGitHub();
}

// ============================================================
//  INICIAR
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se já está autenticado
    const isAuthenticated = checkAuth();
    
    if (!isAuthenticated) {
        // Mostrar tela de login
        document.getElementById('loginContainer').style.display = 'block';
        document.getElementById('adminContainer').classList.remove('active');
    }
});
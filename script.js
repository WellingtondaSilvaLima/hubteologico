// ============================================================
//  CARREGAR DADOS DO JSON EXTERNO
// ============================================================
let debatesData = [];
let videosData = [];
let livrosData = {};

async function loadContent() {
    try {
        const response = await fetch('data/content.json');
        const data = await response.json();
        
        debatesData = data.debates || [];
        videosData = data.videos || [];
        livrosData = data.livros || {};
        
        // Atualizar LINKS_CONFIG
        LINKS_CONFIG.livros = livrosData;
        
        // Renderizar
        renderDebates(debatesData);
        renderVideos(videosData);
        createFilters();
        
    } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
        // Fallback para dados embutidos
        loadFallbackData();
    }
}

function loadFallbackData() {
    // Seus dados estáticos originais aqui
    debatesData = []; // seus dados
    videosData = []; // seus dados
    // ...
}

// Chamar no init
async function init() {
    await loadContent();
    // ... resto do init
}

// Extrair temas únicos
const debateTemas = [...new Set(debatesData.map(d => d.tema))];
const videoTemas = [...new Set(videosData.map(v => v.tema))];

// Função para abrir links da Amazon em nova aba
function openAmazonLink(link) {
    if (link && link !== 'https://amzn.to/4xAdbMc') {
        window.open(link, '_blank', 'noopener,noreferrer');
    } else {
        alert('Link da Amazon será configurado em breve!');
    }
    return false;
}

// Navegação entre páginas
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
    
    // Atualizar URL para SEO
    history.pushState({ page: pageId }, '', `#${pageId}`);
}

// Renderizar debates
function renderDebates(debates) {
    const container = document.getElementById('debatesList');
    container.innerHTML = debates.map(debate => `
        <div class="card" onclick="openDebate(${debate.id})">
            <div class="card-content">
                <h3>${debate.titulo}</h3>
                <p><strong>Tema:</strong> ${debate.tema}</p>
                <p>${debate.resumo.substring(0, 100)}...</p>
                <small>${formatDate(debate.data)}</small>
            </div>
        </div>
    `).join('');
}

function filterDebates() {
    const searchTerm = document.getElementById('searchDebates').value.toLowerCase();
    const activeFilter = document.querySelector('#debateFilters .filter-btn.active');
    const temaFilter = activeFilter ? activeFilter.dataset.tema : 'todos';
    
    let filtered = debatesData;
    
    if (temaFilter !== 'todos') {
        filtered = filtered.filter(d => d.tema === temaFilter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(d => 
            d.titulo.toLowerCase().includes(searchTerm) || 
            d.tema.toLowerCase().includes(searchTerm) ||
            d.resumo.toLowerCase().includes(searchTerm)
        );
    }
    
    renderDebates(filtered);
}

function openDebate(debateId) {
    const debate = debatesData.find(d => d.id === debateId);
    if (debate) {
        // Buscar o link do livro específico
        const livroLink = LINKS_CONFIG.livros[debate.livroTema] || LINKS_CONFIG.amazonGeral;
        
        const modalContent = document.getElementById('modalTextContent');
        modalContent.innerHTML = `
            <div class="text-page">
                <!-- Banner no TOPO, antes do título -->
                <div class="banner-texto-topo" onclick="openAmazonLink('${livroLink}')">
                    <div class="banner-texto-conteudo">
                        <span class="banner-icone">📚</span>
                        <span class="banner-texto">Livro recomendado: ${debate.livroTema}</span>
                        <span class="banner-cta">Clique aqui →</span>
                    </div>
                </div>
                
                <h1>${debate.titulo}</h1>
                <div class="text-date">${formatDate(debate.data)} | Tema: ${debate.tema}</div>
                <div class="text-body">${debate.conteudo}</div>
            </div>
        `;
        
        // Limpar o banner inferior (já que movemos para cima)
        document.getElementById('modalAmazonBanner').innerHTML = '';
        document.getElementById('textModal').style.display = 'block';
    }
}

// Renderizar vídeos
function renderVideos(videos) {
    const container = document.getElementById('videosList');
    container.innerHTML = videos.map(video => `
        <div class="video-card">
            <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
            <div class="video-info">
                <h3>${video.titulo}</h3>
                <p>${video.descricao}</p>
                <small>Tema: ${video.tema}</small>
            </div>
        </div>
    `).join('');
}

function filterVideos() {
    const searchTerm = document.getElementById('searchVideos').value.toLowerCase();
    const activeFilter = document.querySelector('#videoFilters .filter-btn.active');
    const temaFilter = activeFilter ? activeFilter.dataset.tema : 'todos';
    
    let filtered = videosData;
    
    if (temaFilter !== 'todos') {
        filtered = filtered.filter(v => v.tema === temaFilter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(v => 
            v.titulo.toLowerCase().includes(searchTerm) || 
            v.tema.toLowerCase().includes(searchTerm) ||
            v.descricao.toLowerCase().includes(searchTerm)
        );
    }
    
    renderVideos(filtered);
}

function createFilters() {
    // Filtros debates
    const debateFiltersDiv = document.getElementById('debateFilters');
    debateFiltersDiv.innerHTML = `<button class="filter-btn active" data-tema="todos" onclick="setDebateFilter('todos')">Todos</button>`;
    debateTemas.forEach(tema => {
        debateFiltersDiv.innerHTML += `<button class="filter-btn" data-tema="${tema}" onclick="setDebateFilter('${tema}')">${tema}</button>`;
    });
    
    // Filtros vídeos
    const videoFiltersDiv = document.getElementById('videoFilters');
    videoFiltersDiv.innerHTML = `<button class="filter-btn active" data-tema="todos" onclick="setVideoFilter('todos')">Todos</button>`;
    videoTemas.forEach(tema => {
        videoFiltersDiv.innerHTML += `<button class="filter-btn" data-tema="${tema}" onclick="setVideoFilter('${tema}')">${tema}</button>`;
    });
}

function setDebateFilter(tema) {
    document.querySelectorAll('#debateFilters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#debateFilters .filter-btn[data-tema="${tema}"]`).classList.add('active');
    filterDebates();
}

function setVideoFilter(tema) {
    document.querySelectorAll('#videoFilters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#videoFilters .filter-btn[data-tema="${tema}"]`).classList.add('active');
    filterVideos();
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR');
}

function closeModal() {
    document.getElementById('textModal').style.display = 'none';
}

function showPrivacyPolicy() {
    const modalContent = document.getElementById('modalTextContent');
    modalContent.innerHTML = `
        <div class="text-page">
            <h1>Política de Privacidade</h1>
            <div class="text-date">Última atualização: ${new Date().toLocaleDateString('pt-BR')}</div>
            
            <div class="text-body">
                <p>No <strong>HUB Teológico</strong>, valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta Política de Privacidade explica como coletamos, usamos e protegemos seus dados.</p>
                
                <h2>1. Informações que Coletamos</h2>
                <p><strong>1.1. Informações fornecidas voluntariamente:</strong> Quando você interage com nosso site (comentários, contato por email), podemos coletar seu nome e endereço de email.</p>
                <p><strong>1.2. Informações automáticas:</strong> Coletamos dados padrão como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência através de cookies e tecnologias similares.</p>
                
                <h2>2. Como Usamos suas Informações</h2>
                <ul>
                    <li>✓ Melhorar sua experiência de navegação</li>
                    <li>✓ Personalizar conteúdo e recomendações</li>
                    <li>✓ Analisar estatísticas de acesso (Google Analytics)</li>
                    <li>✓ Responder suas dúvidas e solicitações</li>
                    <li>✓ Cumprir obrigações legais</li>
                </ul>
                
                <h2>3. Cookies e Tecnologias de Rastreamento</h2>
                <p>Utilizamos cookies para:</p>
                <ul>
                    <li>• Lembrar suas preferências de navegação</li>
                    <li>• Analisar padrões de tráfego</li>
                    <li>• Personalizar anúncios (apenas links da Amazon)</li>
                </ul>
                <p>Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.</p>
                
                <h2>4. Links da Amazon (Programa de Afiliados)</h2>
                <p>Participamos do Programa de Associados da Amazon. Isso significa que:</p>
                <ul>
                    <li>• Inserimos links especiais que identificam nossa referência</li>
                    <li>• Recebemos comissões por compras qualificadas (sem custo adicional para você)</li>
                    <li>• A Amazon pode coletar dados conforme sua própria <a href="https://www.amazon.com.br/gp/help/customer/display.html?nodeId=201909010" target="_blank">Política de Privacidade</a></li>
                </ul>
                
                <h2>5. Compartilhamento de Dados</h2>
                <p><strong>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros</strong>, exceto:</p>
                <ul>
                    <li>• Quando exigido por lei ou ordem judicial</li>
                    <li>• Com seu consentimento explícito</li>
                    <li>• Para provedores de serviços que nos auxiliam (ex: hospedagem)</li>
                </ul>
                
                <h2>6. Segurança dos Dados</h2>
                <p>Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração ou destruição. Isso inclui:</p>
                <ul>
                    <li>• Criptografia SSL/TLS</li>
                    <li>• Firewalls e proteção contra malware</li>
                    <li>• Acesso restrito a dados pessoais</li>
                </ul>
                
                <h2>7. Seus Direitos (LGPD - Lei Geral de Proteção de Dados)</h2>
                <p>Você tem direito a:</p>
                <ul>
                    <li>✓ Acessar seus dados pessoais</li>
                    <li>✓ Corrigir dados incompletos ou incorretos</li>
                    <li>✓ Solicitar a exclusão de seus dados</li>
                    <li>✓ Revogar consentimento a qualquer momento</li>
                    <li>✓ Solicitar portabilidade dos dados</li>
                </ul>
                <p>Para exercer seus direitos, entre em contato: <strong>hubteologico.ht@gmail.com</strong></p>
                
                <h2>8. Dados de Menores de Idade</h2>
                <p>Não coletamos intencionalmente dados de menores de 13 anos. Se você é responsável por uma criança e descobriu que ela nos forneceu dados, entre em contato para remoção imediata.</p>
                
                <h2>9. Alterações nesta Política</h2>
                <p>Podemos atualizar esta política periodicamente. Recomendamos revisar esta página regularmente. Alterações significativas serão notificadas através do site.</p>
                
                <h2>10. Contato</h2>
                <p>Para questões sobre privacidade:</p>
                <ul>
                    <li>📧 Email: <strong>hubteologico.ht@gmail.com</strong></li>
                    <li>📝 Formulário de contato disponível em breve</li>
                </ul>
                
                <hr>
                <p><small>Ao continuar usando o HUB Teológico, você concorda com esta Política de Privacidade.</small></p>
            </div>
        </div>
    `;
    document.getElementById('modalAmazonBanner').innerHTML = ''; // Remove o banner
    document.getElementById('textModal').style.display = 'block';
}

function showTerms() {
    const modalContent = document.getElementById('modalTextContent');
    modalContent.innerHTML = `
        <div class="text-page">
            <h1>Termos de Uso</h1>
            <div class="text-date">Última atualização: ${new Date().toLocaleDateString('pt-BR')}</div>
            
            <div class="text-body">
                <p>Bem-vindo ao <strong>HUB Teológico</strong>. Ao acessar e usar nosso site, você concorda com estes Termos de Uso. Se não concordar, por favor, não utilize nossos serviços.</p>
                
                <h2>1. Aceitação dos Termos</h2>
                <p>Ao acessar o HUB Teológico, você declara ter lido, entendido e concordado com todos os termos aqui estabelecidos. Estes termos podem ser alterados a qualquer momento, e é sua responsabilidade revisá-los periodicamente.</p>
                
                <h2>2. Conteúdo do Site</h2>
                <p><strong>2.1. Propriedade Intelectual:</strong> Todo o conteúdo do HUB Teológico (textos, imagens, logos, design) é protegido por direitos autorais. Você não pode copiar, distribuir ou modificar sem autorização expressa.</p>
                <p><strong>2.2. Conteúdo de Terceiros:</strong> Os vídeos do YouTube e links da Amazon são propriedade de seus respectivos criadores. Não nos responsabilizamos por alterações nesse conteúdo.</p>
                <p><strong>2.3. Natureza do Conteúdo:</strong> Os artigos e debates refletem opiniões dos autores e não necessariamente concordamos com todas as posições apresentadas. Incentivamos o estudo crítico e pessoal.</p>
                
                <h2>3. Uso Permitido</h2>
                <p>Você pode:</p>
                <ul>
                    <li>✓ Acessar e ler o conteúdo gratuitamente</li>
                    <li>✓ Compartilhar links para nossas páginas</li>
                    <li>✓ Citar trechos com atribuição adequada</li>
                    <li>✓ Salvar conteúdo para uso pessoal</li>
                </ul>
                <p>Você NÃO pode:</p>
                <ul>
                    <li>✗ Usar o conteúdo para fins comerciais sem autorização</li>
                    <li>✗ Publicar nosso conteúdo como se fosse seu</li>
                    <li>✗ Tentar hackear ou violar a segurança do site</li>
                    <li>✗ Usar o site para atividades ilegais</li>
                </ul>
                
                <h2>4. Links da Amazon e Programa de Afiliados</h2>
                <p>O HUB Teológico participa do Programa de Associados da Amazon. Isso significa que:</p>
                <ul>
                    <li>• Inserimos links de produtos relevantes ao conteúdo</li>
                    <li>• Recebemos comissões por compras realizadas através desses links (sem custo extra para você)</li>
                    <li>• Não garantimos preços, disponibilidade ou qualidade dos produtos da Amazon</li>
                    <li>• Qualquer compra na Amazon está sujeita aos termos da própria Amazon</li>
                </ul>
                
                <h2>5. Isenção de Responsabilidade</h2>
                <p><strong>5.1. Conteúdo Teológico:</strong> O HUB Teológico é um recurso educacional e informativo. Não substitui aconselhamento pastoral ou teológico profissional. Decisões baseadas em nosso conteúdo são de sua exclusiva responsabilidade.</p>
                <p><strong>5.2. Disponibilidade do Site:</strong> Não garantimos que o site estará sempre disponível sem interrupções ou erros. Podemos realizar manutenções sem aviso prévio.</p>
                <p><strong>5.3. Danos:</strong> Em nenhuma circunstância seremos responsáveis por danos diretos, indiretos ou consequenciais decorrentes do uso do site.</p>
                
                <h2>6. Comentários e Interações</h2>
                <p><strong>6.1. Conteúdo do Usuário:</strong> Você é responsável pelos comentários que publicar. Reservamos o direito de remover conteúdo ofensivo, spam ou que viole estes termos.</p>
                <p><strong>6.2. Conduta Proibida:</strong> Não é permitido:</p>
                <ul>
                    <li>• Discurso de ódio ou ataques pessoais</li>
                    <li>• Spam ou autopromoção excessiva</li>
                    <li>• Conteúdo ilegal ou adulto</li>
                    <li>• Difamação ou calúnia</li>
                </ul>
                
                <h2>7. Doações (PIX)</h2>
                <p>As doações são voluntárias e não reembolsáveis. Os valores são usados para manter o site (hospedagem, domínio, produção de conteúdo). Não oferecemos benefícios exclusivos em troca de doações.</p>
                
                <h2>8. Rescisão</h2>
                <p>Podemos suspender ou encerrar seu acesso ao site a qualquer momento, por qualquer motivo, incluindo violação destes Termos de Uso.</p>
                
                <h2>9. Legislação Aplicável</h2>
                <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais da comarca de [Sua Cidade - preencha com sua localização].</p>
                
                <h2>10. Contato</h2>
                <p>Para questões sobre estes Termos de Uso: <strong>hubteologico.ht@gmail.com</strong></p>
                
                <hr>
                <p><small>Ao usar o HUB Teológico, você concorda integralmente com estes Termos de Uso.</small></p>
            </div>
        </div>
    `;
    document.getElementById('modalAmazonBanner').innerHTML = '';
    document.getElementById('textModal').style.display = 'block';
}

// Fechar modal clicando fora
window.onclick = function(event) {
    const modal = document.getElementById('textModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Função para copiar PIX com um clique
function copiarPix() {
    const pixInput = document.getElementById('pixKey');
    const feedback = document.getElementById('copyFeedback');
    
    // Seleciona o texto
    pixInput.select();
    pixInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    
    try {
        // Tenta copiar usando a API moderna
        navigator.clipboard.writeText(pixInput.value).then(() => {
            // Feedback visual
            feedback.classList.add('show');
            
            // Muda o texto do botão temporariamente
            const copyBtn = document.querySelector('.copy-btn');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '✓ Copiado!';
            
            // Esconde o feedback após 2 segundos
            setTimeout(() => {
                feedback.classList.remove('show');
                copyBtn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            // Fallback para navegadores antigos
            document.execCommand('copy');
            alert('Chave PIX copiada: ' + pixInput.value);
        });
    } catch (err) {
        alert('Clique na chave PIX e copie manualmente: ' + pixInput.value);
    }
}

// Opcional: Copiar clicando no campo também
function setupPixClickToCopy() {
    const pixInput = document.getElementById('pixKey');
    if (pixInput) {
        pixInput.addEventListener('click', function() {
            this.select();
            copiarPix();
        });
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    setupPixClickToCopy();
});

// ========== MENU HAMBURGUER ==========
const menuHamburguer = document.getElementById('menuHamburguer');
const navLinks = document.getElementById('navLinks');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
    menuHamburguer.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    // Prevenir scroll da página quando menu está aberto
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMenu() {
    menuHamburguer.classList.remove('active');
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Eventos do menu
if (menuHamburguer) {
    menuHamburguer.addEventListener('click', toggleMenu);
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
}

// Fechar menu ao redimensionar para desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Inicialização
function init() {
    createFilters();
    renderDebates(debatesData);
    renderVideos(videosData);
    
    // Verificar hash na URL para SEO
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'debates', 'videos', 'apoia-se'].includes(hash)) {
        showPage(hash);
    }
    
    // Fechar menu ao clicar em qualquer link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

init();

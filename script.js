// ========== CONFIGURAÇÕES DE SEGURANÇA ==========
// Links protegidos - apenas o administrador pode alterar
const LINKS_CONFIG = {
    amazonGeral: 'https://amzn.to/3S4NdjH',
    // Links de livros por tema
    livros: {
        'Calvinismo': 'https://www.amazon.com.br/hz/wishlist/ls/2I1OHVAE5OF1F?tag=familialim0bb-20',
        'Teologia esfria o crente?': 'https://amzn.to/3QhiZJJ',
        'Arminianismo': 'https://www.amazon.com.br/hz/wishlist/ls/21T94KHH5ALPA?tag=familialim0bb-20',
        'Teologia Sistemática': 'https://www.amazon.com.br/hz/wishlist/ls/3ITWS6V65IGHG?tag=familialim0bb-20'
    }
};

// Dados dos debates (protegidos no frontend)
const debatesData = [
    {
        id: 1,
        titulo: "Calvinismo: Entendendo as Doutrinas da Graça",
        tema: "Calvinismo",
        data: "2026-06-15",
        resumo: "O calvinismo é um sistema teológico que enfatiza a soberania de Deus na salvação. Este artigo explora sua origem histórica com João Calvino, o desenvolvimento em Genebra, e os famosos Cinco Pontos (TULIP): Depravação Total, Eleição Incondicional, Expiação Limitada, Graça Irresistível e Perseverança dos Santos. Uma análise aprofundada sobre como essas doutrinas interligadas formam uma visão coesa da salvação como obra inteiramente de Deus.",
        conteudo: `
            <h2>O Que é Calvinismo?</h2>
            <p>O calvinismo é um sistema teológico dentro do cristianismo protestante que recebeu seu nome por conta dos ensinamentos de João Calvino, um dos principais reformadores protestantes do século XVI. É caracterizado por sua ênfase na soberania de Deus, na autoridade das Escrituras e na doutrina da predestinação. O calvinismo se desenvolveu como uma resposta às práticas e doutrinas da Igreja Católica Romana na época da Reforma Protestante.</p>

            <h2>Origem do Calvinismo e Contexto Histórico</h2>
            <p>O calvinismo tem suas raízes na Reforma Protestante, um movimento que visava reformar a Igreja Católica Romana. João Calvino, um dos principais líderes deste movimento, foi um teólogo e pastor que sistematizou as doutrinas reformadas em sua obra mais importante, "As Institutas da Religião Cristã" (1536). Esta obra não só delineou as crenças fundamentais do calvinismo, mas também se tornou um dos textos mais influentes da teologia protestante.</p>

            <h2>Quem Foi João Calvino</h2>
            <p>João Calvino nasceu em 10 de julho de 1509, em Noyon, França. Inicialmente, ele estudou para ser sacerdote católico, mas depois mudou para o estudo do direito. Durante esse período, Calvino começou a se interessar pelos escritos dos reformadores protestantes e eventualmente se converteu ao protestantismo. Sua conversão o forçou a fugir da perseguição religiosa na França, levando-o a se estabelecer em Basileia, Suíça.</p>

            <h2>As Institutas da Religião Cristã</h2>
            <p>Em Basileia, Calvino escreveu a primeira edição de sua obra mais influente, "As Institutas da Religião Cristã", publicada em 1536. Este livro foi uma tentativa de sistematizar as doutrinas protestantes e fornecer uma defesa clara do cristianismo reformado. As "Institutas" abordam uma ampla gama de tópicos teológicos, incluindo a soberania de Deus, a predestinação e a justificação pela fé.</p>

            <h2>Genebra: O Centro do Calvinismo</h2>
            <p>Em 1536, Calvino foi convidado a Genebra, Suíça, para ajudar na reforma da igreja na cidade. Embora tenha enfrentado resistência inicial, ele eventualmente se tornou a figura dominante na vida religiosa e política de Genebra. Sob a liderança de Calvino, Genebra se transformou em um centro do protestantismo reformado, atraindo teólogos, pastores e estudantes de toda a Europa.</p>

            <h2>O Sínodo de Dort</h2>
            <p>O calvinismo continuou a se desenvolver após a morte de Calvino em 1564. Um dos eventos mais significativos na história do calvinismo foi o Sínodo de Dort, realizado na Holanda entre 1618 e 1619. O sínodo foi convocado para resolver uma disputa teológica entre os calvinistas e os arminianos, seguidores de Jacobus Arminius, que contestavam algumas das doutrinas calvinistas. O resultado foi a formulação dos Cinco Pontos do Calvinismo (TULIP), que delinearam as doutrinas centrais da tradição calvinista em resposta às objeções arminianas.</p>

            <h2>Os Cinco Pontos do Calvinismo (TULIP)</h2>
            <p>Os cinco pontos do Calvinismo foram uma resposta às objeções arminianas. Ainda que esses pontos sejam bem conhecidos, ainda geram desacordo até mesmo entre os calvinistas. Alguns acreditam que os termos representados pelo acrônimo TULIP não são as melhores escolhas, enquanto outros abandonaram totalmente o esforço para fazer um acrônimo. Diferentes acrônimos já foram sugeridos, mas dada a fama que o clássico 'TULIP' obteve, dificilmente os esforços para mudanças são eficazes. Ele foi formado a partir dos termos em inglês: Depravação Total, Eleição Incondicional, Expiação Limitada, Graça Irresistível, Perseverança dos Santos.</p>

            <h3>1. Depravação Total</h3>
            <p>A doutrina da depravação total trata da condição espiritual da humanidade em seu estado natural após a Queda. Depravação total refere-se à extensão e profundidade do pecado na natureza humana. Não significa que todas as pessoas são tão más quanto poderiam ser, mas que o pecado afeta todas as áreas da vida do ser humano: mente, vontade, emoções e corpo. Em outras palavras, cada aspecto da nossa natureza está corrompido pelo pecado e, portanto, somos incapazes de nos voltar para Deus por nossos próprios esforços.</p>
            <p>Base bíblica: Romanos 3:10-12; Efésios 2:1-3; Jeremias 17:9.</p>

            <h3>2. Eleição Incondicional</h3>
            <p>Esta doutrina trata da maneira como Deus escolhe aqueles que serão salvos. Eleição incondicional refere-se à crença de que Deus escolhe, desde a eternidade, quem será salvo independentemente de qualquer mérito, ação ou condição da parte do ser humano. A eleição é baseada exclusivamente na vontade soberana de Deus e não é influenciada pelo comportamento ou escolha futura do indivíduo.</p>
            <p>Base bíblica: Romanos 8:29-30; Efésios 1:4-5; 2 Timóteo 1:9.</p>

            <h3>3. Expiação Limitada</h3>
            <p>Expiação limitada afirma que a morte de Cristo foi eficaz e suficiente para a salvação dos eleitos, mas não se estende universalmente a todos os seres humanos. Cristo morreu especificamente para salvar aqueles que Deus escolheu para a salvação. A expiação é "limitada" no sentido de que sua eficácia é restrita aos eleitos, não universal. Muitos calvinistas preferem o termo "redenção particular" para evitar má interpretação.</p>
            <p>Base bíblica: João 10:14-15; Atos 20:28; Efésios 5:25.</p>

            <h3>4. Graça Irresistível</h3>
            <p>'Graça Irresistível' trata da forma como Deus efetivamente chama os eleitos para a salvação, garantindo que eles responderão positivamente ao chamado. Refere-se à crença de que a graça de Deus, quando destinada aos eleitos, é eficaz e infalível em trazer esses indivíduos à salvação. A graça irresistível não arrasta o indisposto para o Reino; ela muda a disposição do coração.</p>
            <p>Base bíblica: João 6:37, 44; Efésios 2:8-9.</p>

            <h3>5. Perseverança dos Santos</h3>
            <p>A perseverança dos santos afirma que aqueles que Deus escolheu e chamou eficazmente à salvação não podem perder sua salvação. Eles serão preservados pela graça de Deus e permanecerão na fé até o fim de suas vidas. Deus persevera com seus santos e, devido a isso, os próprios santos também perseveram. Esta doutrina é também conhecida como a "segurança eterna" ou "segurança dos crentes".</p>
            <p>Base bíblica: João 10:28-29; Romanos 8:38-39; Filipenses 1:6.</p>

            <h2>Conclusão</h2>
            <p>O calvinismo representa uma das tradições teológicas mais influentes do cristianismo protestante. Seus cinco pontos formam uma estrutura teológica que explica não apenas a salvação, mas também a natureza da interação entre a soberania divina e a condição humana. O sistema como um todo reflete a visão calvinista de uma salvação que é inteiramente obra de Deus, desde a eleição até a preservação final dos santos. Embora gere debates intensos, continua sendo uma posição teológica respeitada e amplamente adotada em diversas denominações reformadas ao redor do mundo.</p>
        `,
        livroTema: "Calvinismo"
    },
    {
        id: 2,
        titulo: "O que é Teologia? Uma Introdução ao Estudo de Deus",
        tema: "Teologia",
        data: "2026-06-15",
        resumo: "A teologia é a disciplina que busca compreender o Deus revelado na Bíblia e apresentar uma visão cristã abrangente da realidade. Este artigo explora as divisões da teologia (Hermenêutica, Teologia Bíblica, Sistemática, Histórica, Filosófica, Apologética e Prática), sua importância para a vida cristã e o papel na igreja. Diferencia educação formal de cursos livres, presencial de EaD, e responde à pergunta: 'Teologia esfria o crente?' - mostrando que o estudo teológico e a devoção devem caminhar juntos, enriquecendo a fé.",
        conteudo: `
            <h2>O que é Teologia</h2>
            <p>A teologia é a disciplina que busca compreender o Deus revelado na Bíblia e apresentar uma visão cristã abrangente da realidade. Ela investiga a natureza de Deus, seus atributos e propósitos, e como a criação se relaciona com o Criador, desenvolvendo uma cosmovisão baseada nas verdades bíblicas. Essencialmente, a teologia cristã procura integrar fé e razão, proporcionando uma estrutura para entender o mundo à luz da revelação divina.</p>

            <h2>Como a teologia é dividida</h2>
            <p>Sendo uma ampla área de estudos, a teologia cristã cobre várias áreas e tópicos, incluindo:</p>
            
            <h3>Hermenêutica (bíblica)</h3>
            <p>É o estudo e a metodologia de interpretação dos textos da Bíblia, buscando compreender seu significado original e aplicá-lo de forma correta no contexto atual.</p>
            
            <h3>Teologia Bíblica</h3>
            <p>Estuda as narrativas e temas teológicos dentro da Bíblia, examinando como as doutrinas se desenvolvem ao longo das Escrituras.</p>
            
            <h3>Teologia Sistemática</h3>
            <p>Organiza as doutrinas em categorias, como a doutrina de Cristo (cristologia), do Espírito Santo (pneumatologia), da Igreja (eclesiologia), da salvação (soteriologia) e dos últimos tempos (escatologia).</p>
            
            <h3>Teologia Histórica</h3>
            <p>Examina o desenvolvimento e a história das doutrinas e práticas cristãs ao longo dos séculos. Inclui o estudo dos Pais da Igreja, os concílios ecumênicos e a Reforma Protestante.</p>
            
            <h3>Teologia Filosófica</h3>
            <p>Explora as questões filosóficas relacionadas à fé cristã, como a existência de Deus, a natureza da fé e da razão, e a questão do mal.</p>
            
            <h3>Apologética</h3>
            <p>Visa defender e justificar a fé cristã por meio de princípios filosóficos aceitos de modo mais amplo. Lida com críticas, controvérsias e objeções ao cristianismo ao apresentar argumentos racionais para a fé.</p>
            
            <h3>Teologia Prática</h3>
            <p>Foca em como aplicar os ensinamentos teológicos na vida cotidiana e no ministério da Igreja. Inclui áreas como pregação, ética cristã, aconselhamento, missiologia e espiritualidade.</p>
            
            <p>Cada subdivisão da teologia apresenta uma abordagem distinta e complementar, permitindo ao cristão uma compreensão mais abrangente e aprofundada acerca de Deus.</p>

            <h2>A Importância da Teologia</h2>
            <p>Embora muitos desprezem a importância do estudo teológico e até defendam a ideia de que "a teologia esfria o crente", a teologia é fundamental para uma fé viva e saudável. Estudar teologia sempre fez parte da tradição cristã.</p>
            <p>Inclusive, o primeiro e maior mandamento é que amemos a Deus com todo o nosso coração, alma e entendimento. Isso mostra a importância de render nosso intelecto a Deus, assim como as outras áreas da nossa vida.</p>
            <p>A teologia bem fundamentada promove um entendimento claro dos ensinos centrais da Bíblia, bem como fornece uma estrutura para a adoração e louvor a Deus. Isso ajuda os crentes a crescer em maturidade espiritual e a viverem de acordo com os princípios do Evangelho.</p>
            <p>Assim, a dicotomia entre estudo teológico e devoção é falsa; ambos devem caminhar juntas, enriquecendo e fortalecendo a fé dos indivíduos e da comunidade de fé como um todo.</p>

            <h2>O Papel da Teologia na Igreja</h2>
            <p>A teologia desempenha um papel fundamental na vida da igreja, pois a interpretação correta da Bíblia é essencial para uma igreja saudável. Um bom estudo teológico fornece as ferramentas necessárias para entender as Escrituras de maneira fiel e aplicá-las corretamente na vida da comunidade cristã. Além disso, ajuda a prevenir interpretações errôneas e garante que a igreja esteja enraizada na verdade bíblica.</p>
            <p>É a exposição das verdades bíblicas que educa e forma os crentes, moldando suas mentes e corações conforme a imagem de Cristo. Através da teologia, a igreja é ensinada a pensar sobre Deus, discernir a sua vontade e viver de acordo com os princípios do Evangelho. Isso inclui tanto o conhecimento quanto a aplicação prática da fé.</p>
            <p>Assim, a teologia deve ser uma atividade comunitária, onde a igreja, como corpo de Cristo, se engaja coletivamente na interpretação das Escrituras e na elaboração de sua teologia. Isso promove a unidade na fé e ajuda a evitar desvios doutrinários, pois a comunidade como um todo participa do processo teológico.</p>
            <p>Para que a igreja possa crescer de forma saudável, é necessário cristãos maduros, capazes de desenvolver uma compreensão profunda da sua fé. Isso se dá pelo estudo e ensino teológico.</p>

            <h2>O Estudo Teológico</h2>
            <h3>Quem pode ser considerado teólogo?</h3>
            <p>O título de "teólogo" é frequentemente reservado para aqueles que possuem uma educação formal em teologia. Para isso, estudaram e obtiveram formação em um seminário ou universidade.</p>
            <p>Porém, a teologia não é desenvolvida apenas em meios acadêmicos, mas na vida de igreja e também na prática devocional individual. Como afirmou R.C. Sproul, autor do livro "Somos Todos Teólogos", a reflexão teológica é uma parte natural da vida cristã, independentemente de uma educação formal. Qualquer pessoa que pensa sobre Deus, estuda a Bíblia e procura entender e viver de acordo com sua fé está, de alguma forma, engajada com a teologia.</p>
            <p>Nesse sentido, enxergamos a teologia não apenas como uma disciplina acadêmica, mas também como uma prática devocional. Ela é importante tanto para estudiosos quanto para todo seguidor de Jesus que deseja aprofundar sua compreensão e vivência da fé cristã. Estudar teologia é uma experiência transformadora e enriquecedora, e também necessária. Existem várias maneiras de se aprofundar no estudo teológico, seja por meio das igrejas locais, cursos formais, cursos livres ou até mesmo por conta própria.</p>

            <h3>Educação Formal x Cursos Livres</h3>
            <p>Quando pensamos no estudo teológico, somos apresentados a dois caminhos diferentes: a educação formal e os cursos livres. A educação formal acontece nos seminários teológicos e universidades e visa a preparação e desenvolvimento de pastores, teólogos profissionais e pesquisadores. Já, os cursos livres visam o desenvolvimento do público cristão, focando no estudo e desenvolvimento da vida cristã.</p>
            <p>Os cursos livres de teologia são menos formais e mais acessíveis; eles não exigem pré-requisitos acadêmicos e são voltados para pessoas que desejam aprofundar seu conhecimento teológico sem a rigidez de um programa acadêmico.</p>

            <h3>Curso à Distância x Curso Presencial</h3>
            <p>Um fator de grandes mudanças no ensino nas últimas décadas foi a presença e expansão do ensino à distância (EaD). Em contraste com o ensino presencial, o ensino à distância trouxe maior flexibilidade de horários, permitindo que os alunos estudem em seu próprio ritmo e a partir de qualquer lugar com acesso à internet, o que é ideal para aqueles que têm compromissos profissionais ou familiares. Também tornou o estudo mais acessível e possibilitou o acesso a uma variedade de programas e professores de todo o mundo, independentemente da localização do aluno.</p>
            <p>Por outro lado, os cursos presenciais seguem uma estrutura de horário mais rígida, o que pode ser benéfico para estudantes que preferem um cronograma definido e a disciplina de um ambiente acadêmico.</p>
            <p>Ambas as modalidades de cursos de teologia — online e presencial — têm suas próprias vantagens e desvantagens. A escolha entre um curso online e um curso presencial dependerá de fatores como flexibilidade, interação desejada, método de ensino preferido, custos e preferências pessoais de aprendizagem. Avaliar essas diferenças e considerar suas próprias necessidades e circunstâncias ajudará a tomar a melhor decisão para sua formação teológica.</p>

            <h2>Onde estudar Teologia?</h2>
            <p>O primeiro lugar que deveríamos buscar para o estudo teológico é a igreja. Algumas comunidades contam com uma Escola Bíblica Dominical (EBD) ou grupos de estudo bíblico e discussões teológicas. Contudo, nem todas conseguem dar esse suporte aos seus membros com a qualidade e profundidade necessárias.</p>
            <p>Para aqueles que desejam a educação formal, diversas universidades oferecem cursos de graduação em teologia, e há também vários seminários teológicos pelo Brasil que contribuem para a formação de pastores e teólogos.</p>
            <p>Para todos que desejam se aprofundar no conhecimento de Deus e da sua Palavra, sem abrir mão da qualidade e profundidade, com a flexibilidade da educação à distância, diversas escolas oferecem formações teológicas livres, projetadas para enriquecer tanto o conhecimento teológico quanto a vida espiritual dos cristãos. Estes cursos são ideais para líderes ministeriais, estudantes da Bíblia e todos os que desejam aprofundar sua compreensão da fé cristã de maneira significativa e transformadora.</p>
            
            <h2>Conclusão: Teologia esfria o crente?</h2>
            <p>Respondendo à pergunta que muitos fazem: <strong>Não, a teologia não esfria o crente</strong>. O que esfria a fé é o conhecimento superficial, a falta de aplicação prática e o orgulho intelectual. A verdadeira teologia, quando bem compreendida, leva à adoração, à humildade e ao amor mais profundo por Deus. Como disse Anselmo de Cantuária, "teologia é fé em busca de entendimento". Quanto mais conhecemos a Deus, mais O amamos e O servimos com alegria.</p>
        `,
        livroTema: "Teologia esfria o crente?"
    },
    {
        id: 3,
        titulo: "O que é o Arminianismo? História, Doutrinas e Diferenças do Calvinismo",
        tema: "Arminianismo",
        data: "2026-06-15",
        resumo: "O arminianismo surgiu no início do século XVII como uma reação ao calvinismo estrito, liderado pelo teólogo holandês Jacobus Arminius (1560-1609). Este artigo explora a origem e contexto histórico do movimento, a vida de Arminius, o conflito com Gomarus em Leiden, e a formulação da Remonstrância de 1610. Apresenta os Cinco Artigos do Arminianismo: Graça Preveniente (Deus capacita todos a responder), Eleição Condicional (baseada na presciência divina da fé), Expiação Ilimitada (Cristo morreu por todos), Graça Resistível (o homem pode rejeitar a Deus) e Segurança Condicional (é possível perder a salvação). Compara cada ponto com o Calvinismo (TULIP) e discute o impacto do Sínodo de Dort (1618-1619).",
        conteudo: `
            <h2>O que é Arminianismo?</h2>
            <p>O arminianismo surgiu no início do século XVII, durante um período de intensos debates teológicos na Europa, especialmente nos Países Baixos, onde o calvinismo era a corrente dominante dentro das igrejas reformadas. Este movimento começou com Jacobus Arminius (1560-1609), que, após estudar em Genebra sob supervisão de Teodoro de Beza (sucessor de João Calvino), desenvolveu dúvidas e eventualmente discordou de algumas das doutrinas calvinistas, particularmente a doutrina da predestinação incondicional.</p>

            <h2>Origem e Contexto Histórico</h2>
            <p>O calvinismo, baseado nos ensinamentos de João Calvino, era uma das principais tradições protestantes emergentes durante a Reforma Protestante. Ele enfatizava a soberania de Deus, a predestinação incondicional, e a depravação total do homem.</p>
            <p>O arminianismo tem suas origens no final do século XVI e início do século XVII, como uma reação ao calvinismo estrito que dominava a teologia reformada na Holanda. Seu nome deriva de Jacobus Arminius (1560-1609), um teólogo que desenvolveu ideias teológicas distintas das doutrinas calvinistas predominantes na época.</p>

            <h2>Quem foi Jacobus Arminius</h2>
            <p>Jacobus Arminius nasceu em Oudewater, na Holanda, em 1560. Após a morte de seu pai, ainda criança, Arminius foi adotado por Theodorus Aemilius, um ministro reformado.</p>
            <p>Arminius estudou na Universidade de Leiden, onde se destacou como aluno brilhante. Posteriormente, foi enviado a Genebra, um importante centro do calvinismo, onde estudou sob a orientação de Teodoro de Beza, sucessor de João Calvino.</p>
            <p>Em 1588, Arminius retornou à Holanda e se tornou pastor da Igreja Reformada em Amsterdã. Durante seu ministério, ele se envolveu em várias controvérsias teológicas, especialmente ao ser solicitado a defender a doutrina da predestinação calvinista contra críticas de outros teólogos.</p>
            <p>Ele foi designado para refutar os pontos de vista de Dirck Coornhert, um crítico do calvinismo. Mas ao estudar mais profundamente, ele começou a desenvolver dúvidas sobre alguns aspectos do calvinismo estrito. Durante seus estudos ele se convenceu de que alguns aspectos do calvinismo estavam errados.</p>
            <p>Em 1603, Arminius foi nomeado professor de teologia na Universidade de Leiden. Sua nomeação trouxe à tona o conflito com seus colegas calvinistas, especialmente com Franciscus Gomarus, um ardente defensor da ortodoxia calvinista. Os debates entre Arminius e Gomarus, centrados principalmente na doutrina da predestinação, tornaram-se públicos e polarizaram a comunidade teológica da época.</p>
            <p>A controvérsia cresceu a tal ponto que, mesmo após a sua morte em 1609, seus seguidores, conhecidos como "remonstrantes", continuaram a promover suas ideias. Isso culminou na apresentação da "Remonstrância" de 1610, um documento que expunha as objeções arminianas ao calvinismo.</p>

            <h2>O que o Arminianismo defende</h2>
            <p>Os cinco pontos do Arminianismo, conhecidos como os "Cinco Artigos da Remonstrância", foram formulados no início do século XVII como uma resposta ao Calvinismo. Esse movimento foi liderado pelos seguidores de Arminius.</p>
            <p>Os cinco pontos do Arminianismo foram formalmente apresentados em 1610, cerca de um ano após a morte de Arminius, onde 46 ministros arminianos se reuniram e redigiram a "Remonstrância" (ou "Protesto"), que foi submetido ao governo holandês e às autoridades eclesiásticas. Esse documento expressava as crenças dos Arminianos e se opunha à doutrina calvinista da predestinação.</p>

            <h3>Os Artigos da Remonstrância</h3>
            <ul>
                <li><strong>Graça Preveniente:</strong> Embora o ser humano seja afetado pelo pecado, ele possui a capacidade de responder ao chamado de Deus por meio da graça preveniente.</li>
                <li><strong>Eleição Condicional:</strong> A eleição divina é baseada na presciência de Deus sobre quem exercerá fé em Cristo.</li>
                <li><strong>Expiação Ilimitada:</strong> Cristo morreu por todos, mas sua expiação é eficaz apenas para aqueles que creem.</li>
                <li><strong>Graça Resistível:</strong> A graça de Deus pode ser resistida e rejeitada pelo ser humano.</li>
                <li><strong>Segurança Condicional:</strong> A perseverança na fé é necessária para a salvação final, e é possível que um crente caia da graça e perca a salvação.</li>
            </ul>
            <p>Os remonstrantes propunham uma visão mais centrada no livre-arbítrio humano e na eleição condicional. A formulação desses cinco pontos culminou em um conflito teológico na Holanda. Para resolver essas controvérsias, foi convocado o Sínodo de Dort em 1618-1619.</p>

            <h2>O Sínodo de Dort</h2>
            <p>Em resposta à controvérsia, a Igreja Reformada Holandesa convocou o Sínodo de Dort. O sínodo reuniu teólogos de várias partes da Europa e foi uma das reuniões teológicas mais importantes da época.</p>
            <p>O Sínodo de Dort condenou os pontos de vista arminianos e formulou os Cânones de Dort, que reafirmaram as doutrinas calvinistas de predestinação incondicional, expiação limitada, graça irresistível, e perseverança dos santos, formando os "Cinco Pontos do Calvinismo" como resposta.</p>
            <p>Porém, o movimento arminiano se espalhou e suas ideias e teologia permaneceram vivas. Posteriormente, igrejas como Metodista e Anglicana seguiram amplamente a teologia arminiana.</p>

            <h2>Teologia Arminiana e Diferenças do Calvinismo</h2>
            <p>Para compreendermos melhor a teologia arminiana e suas desarmonias com o calvinismo, vamos olhar cada um dos pontos de discordâncias propostos nos 'Cinco Artigos da Remonstrância':</p>

            <h3>1. Graça Preveniente</h3>
            <p>No contexto do Arminianismo, o conceito de depravação total compartilha algumas semelhanças com a visão calvinista, mas com uma importante diferença em relação à capacidade humana de responder à graça de Deus.</p>
            <p>O conceito de depravação total no Arminianismo reconhece que a queda de Adão teve um impacto devastador sobre toda a humanidade. Isso significa que todos os seres humanos nascem em pecado, com uma natureza corrompida, e são incapazes, por si mesmos, de fazer qualquer coisa que seja verdadeiramente agradável a Deus.</p>
            <p>No entanto, essa visão é acompanhada por uma importante distinção arminiana. Embora o ser humano esteja espiritualmente morto, o Arminianismo ensina que Deus concede a todos os seres humanos o que é chamado de <strong>graça preveniente</strong>. Essa graça é uma obra inicial do Espírito Santo que atua no coração e mente das pessoas, capacitando-as a responder ao chamado do evangelho.</p>
            <p><strong>Base bíblica:</strong> João 1:9; Tito 2:11; 1 Timóteo 2:4.</p>

            <h3>2. Eleição Condicional</h3>
            <p>O conceito de Eleição Condicional no Arminianismo é uma resposta direta à doutrina calvinista da Eleição Incondicional. No Arminianismo, a eleição é vista como condicional, ou seja, baseada em uma condição que deve ser cumprida pelo indivíduo.</p>
            <p>A eleição é baseada na <strong>presciência de Deus</strong>, ou seja, no conhecimento prévio de Deus sobre quem responderá com fé ao evangelho de Jesus Cristo. Deus, em Sua onisciência, sabe desde a eternidade quem escolherá aceitar a oferta de salvação. Com base nesse conhecimento prévio, Deus elege ou predestina aqueles que Ele sabe que crerão.</p>
            <p><strong>Base bíblica:</strong> Romanos 8:29; 1 Pedro 1:1-2.</p>

            <h3>3. Expiação Ilimitada</h3>
            <p>A doutrina da Expiação Ilimitada é uma das diferenças mais significativas entre o Arminianismo e o Calvinismo. Ela diz respeito ao alcance e à eficácia da morte de Jesus Cristo na cruz. No Arminianismo, a expiação é entendida como sendo ilimitada, o que significa que <strong>Cristo morreu por todos os seres humanos</strong>, e não apenas por um grupo específico de eleitos.</p>
            <p>A Expiação Ilimitada ensina que o sacrifício de Jesus Cristo na cruz foi feito por todos os pecados de todas as pessoas em todo o mundo. Isso significa que a morte de Cristo foi suficiente para pagar pelos pecados de toda a humanidade, e a oferta de salvação está disponível para todos, sem exceção.</p>
            <p><strong>Base bíblica:</strong> 1 João 2:2; 1 Timóteo 2:3-6; Hebreus 2:9.</p>

            <h3>4. Graça Resistível</h3>
            <p>A doutrina da Graça Resistível trata da forma como a graça de Deus atua no processo de salvação. No Arminianismo, a graça que Deus concede ao ser humano para ser salvo <strong>pode ser resistida</strong>, ou seja, as pessoas têm a liberdade de aceitar ou rejeitar a salvação oferecida por Deus.</p>
            <p>Essa visão contrasta diretamente com a doutrina calvinista da Graça Irresistível, que sustenta que aqueles a quem Deus escolhe para a salvação não podem resistir ao Seu chamado eficaz.</p>
            <p><strong>Base bíblica:</strong> Atos 7:51; Hebreus 3:7-8; Hebreus 12:15.</p>

            <h3>5. Segurança Condicional da Salvação</h3>
            <p>O quinto ponto do Arminianismo aborda a questão da perseverança na fé. No Arminianismo, a perseverança dos santos é condicional, o que significa que a salvação de uma pessoa depende de sua contínua fé em Cristo. <strong>Se um crente genuíno se afastar da fé e rejeitar a Cristo, ele pode perder sua salvação.</strong></p>
            <p>Diferentemente da doutrina calvinista da Perseverança dos Santos, que afirma que todos os eleitos inevitavelmente perseverarão na fé, o Arminianismo ensina que a salvação pode ser perdida se uma pessoa abandonar sua fé.</p>
            <p><strong>Base bíblica:</strong> Hebreus 10:26-27; 2 Pedro 2:20-21; João 15:5-6.</p>

            <h2>Tabela Comparativa: Arminianismo vs Calvinismo</h2>
            <ul>
                <li><strong>Depravação:</strong> Arminianismo - Total, mas superada pela graça preveniente | Calvinismo - Total e incapacitante</li>
                <li><strong>Eleição:</strong> Arminianismo - Condicional (baseada na fé prevista) | Calvinismo - Incondicional (baseada na vontade de Deus)</li>
                <li><strong>Expiação:</strong> Arminianismo - Ilimitada (Cristo morreu por todos) | Calvinismo - Limitada (apenas para os eleitos)</li>
                <li><strong>Graça:</strong> Arminianismo - Resistível (pode ser rejeitada) | Calvinismo - Irresistível (eficaz para os eleitos)</li>
                <li><strong>Perseverança:</strong> Arminianismo - Condicional (pode ser perdida) | Calvinismo - Incondicional (uma vez salvo, sempre salvo)</li>
            </ul>

            <h2>Conclusão</h2>
            <p>O arminianismo representa uma das tradições teológicas mais influentes dentro do cristianismo protestante, oferecendo uma perspectiva que enfatiza o amor universal de Deus, o livre-arbítrio humano e a responsabilidade individual na salvação. Embora tenha sido condenado no Sínodo de Dort, suas ideias persistiram e influenciaram profundamente denominações como o Metodismo, o Anglicanismo e diversos movimentos de santidade e pentecostais. O debate entre calvinistas e arminianos continua até hoje, enriquecendo a reflexão teológica sobre a relação entre a soberania divina e a responsabilidade humana.</p>
        `,
        livroTema: "Arminianismo"
    },
    {
        id: 4,
        titulo: "O que é Teologia Sistemática? Organizando as Doutrinas da Fé Cristã",
        tema: "Teologia",
        data: "2026-06-15",
        resumo: "Teologia sistemática é um ramo da teologia cristã que busca organizar e sintetizar as crenças e doutrinas do cristianismo de maneira ordenada e coerente. Este artigo apresenta as principais divisões da teologia sistemática: Bibliologia (estudo da Palavra de Deus), Teontologia (estudo de Deus), Cristologia (estudo de Jesus Cristo), Pneumatologia (estudo do Espírito Santo), Antropologia Bíblica (estudo do ser humano), Soteriologia (estudo da salvação), Eclesiologia (estudo da Igreja) e Escatologia (estudo das últimas coisas). Para cada doutrina, são exploradas as principais questões, sua importância teológica e aplicações práticas para a vida cristã, mostrando que a teologia sistemática não é apenas acadêmica, mas transformadora.",
        conteudo: `
            <h2>O que é Teologia Sistemática?</h2>
            <p>Teologia sistemática é um ramo da teologia cristã que busca organizar e sintetizar as crenças e doutrinas do cristianismo de maneira ordenada e coerente. Ela sistematiza as informações bíblicas e teológicas em categorias ou temas específicos com a finalidade de facilitar o estudo e a compreensão das crenças cristãs, como em uma biblioteca.</p>
            
            <p>Contudo, a Teologia Sistemática não se restringe apenas a categorizar doutrinas bíblicas a fim de facilitar o estudo; a Sistemática é totalmente aplicável às nossas vidas. A maneira como vivemos é moldada por aquilo que cremos. Assim, a teologia sistemática atua não apenas no campo do conhecimento teológico acadêmico, mas se vale do poder transformador da Palavra de Deus para nos moldar à sua imagem.</p>
            
            <p>Todo nosso esforço teológico precisa ter como consequência um caráter forjado à semelhança de Jesus.</p>
            
            <p>A teologia sistemática pode, além de auxiliar nossa compreensão da Bíblia e suas doutrinas, nos levar ao conhecimento do Deus que se revela por meio desse livro. A teologia sistemática não é apenas uma disciplina teológica para fins acadêmicos ou uma ferramenta para a formação intelectual, mas uma poderosa ferramenta para nos achegarmos a Deus.</p>
            
            <blockquote>
                <p>"Esta é a vida eterna: que te conheçam, o único Deus verdadeiro, e a Jesus Cristo, a quem enviaste." – João 17:3</p>
            </blockquote>
            
            <p>Neste artigo descreveremos as principais áreas da teologia sistemática. Além disso, daremos possíveis aplicações de como a teologia pode afetar nossas vidas de modo prático.</p>

            <h2>Divisões da Teologia Sistemática</h2>
            <p>Wayne Grudem, em seu famoso manual de teologia sistemática, divide as áreas da teologia sistemática da seguinte maneira:</p>

            <h3>1. Bibliologia – A Doutrina da Palavra de Deus</h3>
            <p>A Doutrina da Palavra de Deus, também conhecida como Doutrina da Revelação, aborda como Deus se comunica com a humanidade e como Ele se revela (ou se faz conhecido).</p>
            
            <p><strong>Perguntas respondidas pela Bibliologia:</strong></p>
            <ul>
                <li>Quais são as diferentes formas da Palavra de Deus?</li>
                <li>O que faz parte da Bíblia e o que não faz?</li>
                <li>Como sabemos que a Bíblia é a Palavra de Deus?</li>
                <li>A Bíblia contém erros?</li>
                <li>É possível entender a Bíblia corretamente?</li>
                <li>A Bíblia é suficiente para saber a vontade de Deus?</li>
            </ul>
            
            <p><strong>Importância da Bibliologia:</strong> A Doutrina da Revelação é essencial na teologia cristã, pois ela fundamenta a crença de que Deus se comunica com a humanidade de maneiras claras e compreensíveis, e de que é possível obter orientação e verdade para a vida e a salvação na Palavra de Deus.</p>
            
            <p><strong>Aplicação prática:</strong> Porque Deus registrou a sua Palavra, concluímos que ele não apenas se fez conhecido, mas também deseja que o conheçamos. Deus deseja revelar-se a nós. Quando nos sentimos inaptos ou incapazes de conhecê-lo, podemos nos lembrar que Deus é o maior interessado em ter relacionamento conosco.</p>

            <h3>2. Teontologia – A Doutrina de Deus</h3>
            <p>A Teontologia é uma área da teologia que se dedica ao estudo de Deus, sua natureza, atributos e obras. Ela aborda questões centrais sobre quem Deus é e como Ele se relaciona com o mundo e com a humanidade.</p>
            
            <p><strong>Perguntas respondidas pela Teontologia:</strong></p>
            <ul>
                <li>Como sabemos que Deus existe?</li>
                <li>Podemos realmente conhecer a Deus?</li>
                <li>Em que aspectos Deus é diferente de nós?</li>
                <li>Como Deus pode ser três pessoas, porém um só Deus?</li>
                <li>Se Deus controla todas as coisas, como nossos atos podem ter significado real?</li>
                <li>Qual a relação entre Deus e o mal que há no mundo?</li>
                <li>O que são anjos? Por que Deus os criou?</li>
            </ul>
            
            <p><strong>Importância da Teontologia:</strong> No livro "O Conhecimento do Santo", Tozer argumenta que todos os problemas da humanidade são, em última instância, problemas teológicos. A falta de conhecimento de Deus é a fonte primária de crenças e paradigmas distorcidos pelo pecado.</p>
            
            <p><strong>Aplicação prática:</strong> Pela teontologia, podemos conhecer a Deus em dois de seus muitos atributos: soberania e bondade. Isso nos dá uma base segura para descansar, mesmo em meio às dificuldades, e confiar nossas vidas a Ele. Porque Deus é bom, sabemos que as provações também cooperam para o bem; porque é soberano, nada foge do seu controle.</p>

            <h3>3. Antropologia Bíblica – A Doutrina do Homem à Imagem de Deus</h3>
            <p>Também conhecida como Imago Dei, a doutrina do homem à imagem de Deus afirma que os seres humanos foram criados à imagem e semelhança de Deus.</p>
            
            <p><strong>Perguntas respondidas pela Antropologia:</strong></p>
            <ul>
                <li>Por que Deus nos criou?</li>
                <li>Como Deus nos fez semelhantes a ele?</li>
                <li>Por que Deus criou dois gêneros?</li>
                <li>O que as Escrituras querem dizer com "alma" e "espírito"?</li>
                <li>O que é pecado? Qual a sua origem?</li>
            </ul>
            
            <p><strong>Importância da Antropologia Bíblica:</strong> Essa doutrina é central para a fé cristã pois influencia profundamente a visão cristã da natureza humana, da ética e do propósito da vida.</p>
            
            <p><strong>Aplicação prática:</strong> Uma aplicação desta doutrina está na necessidade da vida em comunidade. Porque Deus é, em sua essência, uma comunidade formada por três pessoas – Pai, Filho e Espírito – e nós fomos criados à sua imagem, fomos criados para a comunhão. Por meio dos relacionamentos, recebemos revelação de aspectos do ser de Deus que só podem ser conhecidos no contexto da comunidade.</p>

            <h3>4. Cristologia – A Doutrina de Cristo</h3>
            <p>A Cristologia é a área da teologia que se concentra na pessoa e na obra de Jesus Cristo.</p>
            
            <p><strong>Perguntas respondidas pela Cristologia:</strong></p>
            <ul>
                <li>Como Jesus pode ser plenamente Deus e plenamente homem?</li>
                <li>Jesus poderia ter pecado?</li>
                <li>Era necessário que Cristo morresse?</li>
                <li>Como era o corpo ressurreto de Jesus?</li>
                <li>De que maneira Cristo é profeta, sacerdote e rei?</li>
            </ul>
            
            <p><strong>Importância da Cristologia:</strong> A Cristologia é fundamental para a fé cristã, pois Jesus Cristo é o centro da revelação divina e da salvação.</p>
            
            <p><strong>Aplicação prática:</strong> Porque Deus encarnou, nós podemos conhecer o modelo de humanidade proposto para nós e receber graça para viver segundo ele. Cristo também partilhou das mesmas experiências que nós – nasceu, chorou, comeu, trabalhou – e em tudo isso agradou a Deus. Por isso, nós também podemos viver de modo santificado.</p>

            <h3>5. Pneumatologia – A Doutrina do Espírito Santo</h3>
            <p>A Pneumatologia é a área da teologia sistemática que estuda a pessoa e a obra do Espírito Santo.</p>
            
            <p><strong>Perguntas respondidas pela Pneumatologia:</strong></p>
            <ul>
                <li>Quais são as atividades do Espírito Santo ao longo da história da Bíblia?</li>
                <li>Qual é o papel do Espírito na vida do crente?</li>
                <li>O que significa ser cheio do Espírito Santo?</li>
                <li>Quais são os dons espirituais?</li>
            </ul>
            
            <p><strong>Importância da Pneumatologia:</strong> A Pneumatologia é crucial para a vida cristã, pois o Espírito Santo é o agente ativo de Deus na criação, na salvação e na santificação dos crentes.</p>
            
            <p><strong>Aplicação prática:</strong> A todo momento, podemos experimentar a companhia do Espírito Santo – o próprio Deus habitando em nós. Em sua ascensão, Jesus promete que não nos deixaria sós, mas que o Pai enviaria o seu Espírito. A presença do Espírito Santo em nós contesta todo sentimento de solidão, pois nós temos Deus conosco.</p>

            <h3>6. Soteriologia – A Doutrina da Salvação</h3>
            <p>A soteriologia é o ramo da teologia sistemática que estuda a salvação, especialmente como ela é alcançada e quais são suas implicações para a humanidade. A palavra vem do grego soteria, que significa "salvação", e logia, que significa "estudo".</p>
            
            <p><strong>Perguntas respondidas pela Soteriologia:</strong></p>
            <ul>
                <li>O que significa nascer de novo?</li>
                <li>O que é fé salvadora?</li>
                <li>O arrependimento dos pecados é necessário para a salvação?</li>
                <li>Verdadeiros cristãos podem perder a salvação?</li>
                <li>Como saber se realmente nascemos de novo?</li>
            </ul>
            
            <p><strong>Importância da Soteriologia:</strong> Conhecer soteriologia é essencial para a fé cristã, pois o propósito último da vida cristã é a vida eterna com Deus. É por meio dessa doutrina que compreendemos a salvação e temos nossa fé fortalecida.</p>
            
            <p><strong>Aplicação prática:</strong> A justificação pela fé afirma que somos justificados diante de Deus por meio da fé na obra de Cristo. Uma das implicações disso é que Deus nos aceita. Se somos aceitos por Deus, por que não nos aceitaríamos? Nossa identidade não está centrada no que a sociedade diz, mas no fato de que somos aceitos por Deus.</p>

            <h3>7. Eclesiologia – A Doutrina da Igreja</h3>
            <p>A eclesiologia é o estudo da Igreja, sua natureza, propósito, organização e sacramentos.</p>
            
            <p><strong>Perguntas respondidas pela Eclesiologia:</strong></p>
            <ul>
                <li>O que é necessário para constituir uma igreja?</li>
                <li>Quais são os propósitos da igreja?</li>
                <li>Como a igreja deve ser governada?</li>
                <li>Quem deve ser batizado? Qual o significado do batismo?</li>
                <li>Qual é o significado da ceia do Senhor?</li>
                <li>O que são dons espirituais?</li>
            </ul>
            
            <p><strong>Importância da Eclesiologia:</strong> A eclesiologia ajuda o cristão a entender a sua relação com a igreja, bem como o papel da igreja no plano de Deus.</p>
            
            <p><strong>Aplicação prática:</strong> Ao adorarmos a Deus em meio à congregação dos santos, experimentamos um prelúdio da alegria que existe no ambiente celestial, onde todos clamam "Santo, Santo, Santo é o Senhor Deus todo-poderoso".</p>

            <h3>8. Escatologia – A Doutrina do Futuro</h3>
            <p>A escatologia é o ramo da teologia que estuda as "últimas coisas" ou eventos finais, como o destino último da humanidade e do mundo. A palavra "escatologia" vem do grego eschatos, que significa "último" ou "final".</p>
            
            <p><strong>Perguntas respondidas pela Escatologia:</strong></p>
            <ul>
                <li>Quando e como será a volta de Cristo?</li>
                <li>O que é o milênio? Quando ele acontecerá?</li>
                <li>Os cristãos passarão pela grande tribulação?</li>
                <li>O que é o céu? É um lugar?</li>
                <li>Como será a vida no novo céu e na nova terra?</li>
            </ul>
            
            <p><strong>Importância da Escatologia:</strong> A escatologia é uma parte vital da fé cristã, pois trata do motivo da nossa esperança – o Dia do Senhor. Aquilo que cremos sobre o futuro molda como vivemos no presente.</p>
            
            <p><strong>Aplicação prática:</strong> A dor de perder alguém é extremamente difícil de processar. Isso porque a morte não é algo natural – não fomos criados para experimentá-la, mas para vivermos eternamente com Deus. Quando a morte bate em nossa porta, nosso consolo e esperança estão no dia em que Cristo vencerá a morte, e a dor da separação nunca mais será experimentada.</p>

            <h2>Conclusão</h2>
            <p>A teologia sistemática é uma ferramenta indispensável para o crescimento na fé cristã. Ela não apenas organiza o conhecimento bíblico de forma coerente, mas também transforma vidas à medida que aplicamos suas verdades no dia a dia. Como disse Anselmo de Cantuária, "teologia é fé em busca de entendimento". Que possamos, através do estudo da teologia sistemática, conhecer mais a Deus e amá-lo mais profundamente.</p>
        `,
        livroTema: "Teologia Sistemática"
    }
];

const videosData = [
    {
        id: 1,
        titulo: "Introdução",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/OyymFeNPHyE",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    },
    {
        id: 2,
        titulo: "O Crescimento da Igreja",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/PGkEwzmtOkA",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    },
    {
        id: 3,
        titulo: "As Perseguições",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/bJV-gm_fr8Y",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    },
    {
        id: 4,
        titulo: "Os Apologistas",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/C3CywrA5wOY",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    },
    {
        id: 5,
        titulo: "Ortodoxia e Heresia",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/Pmx5218FqBg",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    },
    {
        id: 6,
        titulo: "O Cânon o Credo e os Bispos (Parte 1)",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/X0MzMBPami8",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    },
    {
        id: 7,
        titulo: "O Cânon o Credo e os Bispos (Parte 2)",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/ITW46J0c9j8",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    },
    {
        id: 8,
        titulo: "Os Pais da Igreja",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/D4jyYFyRt6w",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    },
    {
        id: 9,
        titulo: "Os Cristãos Primitivos (Parte 1)",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/9pKehqDaX-Y",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    },
    {
        id: 10,
        titulo: "Os Cristãos Primitivos (Parte 2)",
        tema: "História da Igreja",
        url: "https://www.youtube.com/embed/kLdo3ZHBIrA",
        descricao: "Curso de História da Igreja do canal do 'Jardel Fernandes Oficial'."
    }
];

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
                        <span class="banner-texto">Livros recomendados sobre ${debate.tema}</span>
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

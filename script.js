const meusProjetos = [
    {
        titulo: "Apollo11 - Sistema Web de Registro",
        descricao: "Sistema web para cadastro, consulta e gestão de atestados médicos de alunos e avaliação contínua de equipes ágeis.",
        tecnologias: ["Python", "Flask", "HTML", "CSS"],
        link: "https://github.com/matheussd1/Apollo11",
        status: "Concluído"
    },
    {
        titulo: "Capyjavas - Sistema de PDI",
        descricao: "Ferramenta para a gestão de Planos de Desenvolvimento Individual (PDIs), metas e documentos por parte da equipe de RH e gerentes.",
        tecnologias: ["Java", "MySQL", "Figma"],
        link: "https://github.com/eloa-ramos/Capyjavas",
        status: "Concluído"
    },
    {
        titulo: "DM-API - Inteligência de Dados",
        descricao: "Plataforma de análise de dados do Banco Central para auxiliar na tomada de decisão estratégica para expansão de crédito sustentável.",
        tecnologias: ["Python", "Node.js", "React", "TypeScript", "SQLite"],
        link: "https://github.com/teamminerva/dm-api",
        status: "Em andamento"
    }
];

const minhaFormacao = [
    {
        curso: "Análise e Desenvolvimento de Sistemas (ADS)",
        instituicao: "FATEC São José dos Campos",
        periodo: "2025 - 2027",
        tipo: "Curso Superior (Tecnólogo)"
    },
    {
        curso: "Git e Versionamento Básico",
        instituicao: "RB Tech / Cursa",
        periodo: "Fevereiro de 2025",
        tipo: "Curso Complementar"
    }
];

const minhasSkills = [
    {
        categoria: "Técnicas (Hard Skills)",
        itens: ["Python", "Java", "JavaScript", "TypeScript", "HTML/CSS", "MySQL", "Git", "Figma"]
    },
    {
        categoria: "Interpessoais (Soft Skills)",
        itens: ["Comunicação Clara", "Trabalho em Equipe (Scrum)", "Pensamento Crítico", "Feedback Construtivo"]
    }
];

function renderizarProjetos() {
    const container = document.getElementById('lista-projetos-dinamica');
    let html = '';

    // Uso obrigatório de estrutura de repetição (for)
    for (let i = 0; i < meusProjetos.length; i++) {
        const projeto = meusProjetos[i];
        
        // Uso obrigatório de estrutura de decisão (if/else)
        let badgeStatus = '';
        if (projeto.status === "Em andamento") {
            badgeStatus = `<span style="background-color: #d97706; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-left: 10px;">Em desenvolvimento 🚀</span>`;
        } else {
            badgeStatus = `<span style="background-color: #059669; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-left: 10px;">Concluído ✅</span>`;
        }

        html += `
            <div class="projeto">
                <h3>${projeto.titulo} ${badgeStatus}</h3>
                <p><strong>Descrição:</strong> ${projeto.descricao}</p>
                <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(', ')}</p>
                <a href="${projeto.link}" target="_blank">Acessar repositório no GitHub</a>
            </div>
        `;
    }
    container.innerHTML = html;
}

function renderizarFormacao() {
    const container = document.getElementById('lista-formacao');
    let html = '';

    for (let i = 0; i < minhaFormacao.length; i++) {
        const item = minhaFormacao[i];
        html += `
            <div style="margin-bottom: 20px;">
                <h3 style="color: #a2f0df; margin-bottom: 5px;">${item.curso}</h3>
                <p style="margin: 0;"><strong>Instituição:</strong> ${item.instituicao}</p>
                <p style="margin: 0;"><strong>Período:</strong> ${item.periodo} | <em>${item.tipo}</em></p>
            </div>
        `;
    }
    container.innerHTML = html;
}

function renderizarSkills() {
    const container = document.getElementById('lista-habilidades');
    let html = '';

    for (let i = 0; i < minhasSkills.length; i++) {
        const grupo = minhasSkills[i];
        html += `
            <div style="margin-bottom: 25px;">
                <h3 style="color: #a2f0df; margin-bottom: 10px; border-bottom: 1px solid #1a3b35; padding-bottom: 5px;">${grupo.categoria}</h3>
                <ul style="line-height: 1.8; font-size: 1.1rem;">
                    ${grupo.itens.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    container.innerHTML = html;
}

renderizarProjetos();
renderizarFormacao();
renderizarSkills();
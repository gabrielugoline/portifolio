// Exemplo de repositórios (os dados podem ser substituídos conforme necessário)
const repositories = [
    { name: "Escola-Infantil-Arca", description: "Site para escola Infantil Cristã Arca da Aliança", language: "SCSS", stars: 12, forks: 3, updated_at: "Mar 30, 2025", url: "https://escola-infantilarca.vercel.app/" },
    { name: "Ww-Imóveis", description: "Site Imobiliário para WW imóveis", language: "HTML", stars: 8, forks: 2, updated_at: "Mar 19, 2025", url: "https://ww-imoveis.vercel.app/" },
    { name: "Ateliê-Burguer", description: "Site para hamburgueria Ateliê Burguer", language: "CSS", stars: 15, forks: 5, updated_at: "Mar 14, 2025", url: "https://atelie-burguer.vercel.app/" },
    { name: "Kamikaze-Store", description: "Site para loja online Kamikaze Store", language: "HTML", stars: 25, forks: 7, updated_at: "Jan 30, 2025", url: "https://kamikazeoficial.vercel.app/" },
    { name: "Confeitaria-Amellis", description: "Site para Confeitaria Amellis", language: "HTML", stars: 18, forks: 6, updated_at: "Dec 27, 2024", url: "https://amelisconfeitaria.vercel.app/" },
    { name: "MrFelipe-Barbearia", description: "Site para Barbearia MrFelipe", language: "CSS", stars: 22, forks: 9, updated_at: "Dec 22, 2024", url: "https://mrfelipebarbearia.vercel.app/" },
    { name: "Academia-Callado-Trainer", description: "Site para Academia Callado Trainer", language: "HTML", stars: 30, forks: 12, updated_at: "Mar 30, 2025", url: "https://www.calladotrainer.com.br/" },
    { name: "Auto-Escola-Águia", description: "Site para Auto Escola Águia", language: "CSS", stars: 45, forks: 20, updated_at: "Dec 10, 2024", url: "https://autoescola-aguia.vercel.app/" },
    { name: "Tech-Stock", description: "Plataforma de gerenciamento de Stock para empresa ti", language: "TypeScript", stars: 38, forks: 14, updated_at: "Nov 20, 2024", url: "https://tech-stock.vercel.app/" },
    { name: "Auto-Elétrica-HC", description: "Site para Auto Elétrica", language: "SCSS", stars: 55, forks: 17, updated_at: "Nov 3, 2024", url: "https://eletricahc.vercel.app/" },
    { name: "Senhora-Empada", description: "Site para loja de Empada", language: "CSS", stars: 12, forks: 3, updated_at: "Nov 3, 2024", url: "https://senhora-empada.vercel.app/" },
    { name: "Portal Hospital Santa Rita", description: "Portal interno para Hospital", language: "HTML", stars: 16, forks: 12, updated_at: "Set 3, 2025", url: "https://portal-hsr.vercel.app/"},
    { name: "Escola Laura Chagas", description: "Site para escola", language: "HTML", stars: 10, forks: 1, updated_at: "Ago 12, 2025", url: "https://escola-laurachagas.vercel.app/" },
    { name: "Move Up", description: "ERP para academias", language: "JavaScript", stars: 19, forks: 1, updated_at: "Out 1, 2025", url: "https://move-up-nu.vercel.app/" }
];

// Mapeamento de linguagens para cores
const languageColors = {
    "HTML": "bg-orange-500", // Cor laranja para HTML
    "CSS": "bg-blue-500", // Cor azul para CSS
    "SCSS": "bg-pink-500", // Cor rosa para SCSS
    "Node.js": "bg-green-500", // Cor verde para Node.js
    "TypeScript": "bg-blue-600", // Cor azul escuro para TypeScript
    "JavaScript": "bg-yellow-600", // Cor para JavaScript
};

// Função para gerar a cor do ícone da linguagem
function getLanguageColor(language) {
    return languageColors[language] || "bg-gray-500"; // Se não encontrar, usa cinza
}

// Função para gerar o HTML de um repositório
function generateRepoHTML(repo) {
    const languageColor = getLanguageColor(repo.language);

    return `
        <a href="${repo.url}" class="block p-4 rounded mb-4 border border-gray-700">
            <h4 class="text-blue-400 font-bold">${repo.name}</h4>
            <p>${repo.description}</p>
            <div class="flex items-center text-gray-400 mt-2">
                <span class="mr-2 flex items-center">
                    <span class="w-3 h-3 rounded-full ${languageColor} mr-2"></span>
                    ${repo.language}
                </span>
                <span class="mr-2">
                    <i class="fas fa-star"></i>
                    ${repo.stars}
                </span>
                <span class="mr-2">
                    <i class="fas fa-code-branch"></i>
                    ${repo.forks}
                </span>
                <span class="ml-auto">Atualizado em ${repo.updated_at}</span>
            </div>
            <span class="border border-gray-600 text-white bg-transparent px-2 py-1 rounded-xl mt-2 inline-block">Público</span>
        </a>
    `;
}



// Função para filtrar repositórios com base na busca e no filtro
function filterRepos() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const sortBy = document.getElementById('sort-select').value;

    let filteredRepos = repositories.filter(repo => {
        return (
            repo.name.toLowerCase().includes(searchQuery) || 
            repo.description.toLowerCase().includes(searchQuery)
        );
    });

    if (sortBy === "name") {
        filteredRepos.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "date") {
        filteredRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    } else if (sortBy === "stars") {
        filteredRepos.sort((a, b) => b.stars - a.stars);
    }

    // Atualizar a lista de repositórios
    const reposList = document.getElementById('repos-list');
    reposList.innerHTML = ""; // Limpar lista anterior

    filteredRepos.forEach(repo => {
        reposList.innerHTML += generateRepoHTML(repo);
    });
}

// Adicionar eventos para buscar e filtrar
document.getElementById('search-input').addEventListener('input', filterRepos);
document.getElementById('sort-select').addEventListener('change', filterRepos);

// Inicializar a lista de repositórios
filterRepos();

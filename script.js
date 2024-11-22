// Dados atualizados sobre redes sociais em 2023 (em bilhões)
const redesSociais = {
    "Facebook": 2.96,  // bilhões
    "YouTube": 2.70,   // bilhões
    "WhatsApp": 2.00,  // bilhões
    "Instagram": 2.00, // bilhões
    "TikTok": 1.70,    // bilhões
    "WeChat": 1.26     // bilhões
};

const redes = Object.keys(redesSociais);
const usuarios = Object.values(redesSociais);

// Configuração do gráfico de barras
const data = [{
    x: redes,
    y: usuarios,
    type: 'bar',
    marker: {
        color: '#4CAF50',  // Cor das barras
    }
}];

// Layout do gráfico
const layout = {
    title: {
        text: 'Usuários Ativos por Rede Social (em bilhões) - 2023',
        font: {
            size: 20
        }
    },
    xaxis: {
        title: 'Redes Sociais',
        titlefont: {
            size: 15
        }
    },
    yaxis: {
        title: 'Usuários Ativos (em bilhões)',
        titlefont: {
            size: 15
        },
        tickformat: ',.2f', // Formato para mostrar com 2 casas decimais
    },
    plot_bgcolor: '#fff',
    paper_bgcolor: '#f4f4f4',
    font: {
        color: '#333'
    }
};

// Gerar o gráfico na página
Plotly.newPlot('grafico-container', data, layout);

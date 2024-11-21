// Dados fictícios sobre redes sociais
const redesSociais = {
    "Facebook": 2.99,  // bilhões
    "YouTube": 2.68,   // bilhões
    "WhatsApp": 2.05,  // bilhões
    "Instagram": 2.01, // bilhões
    "Twitter": 1.30    // bilhões
};

const redes = Object.keys(redesSociais);
const usuarios = Object.values(redesSociais);

// Configuração do gráfico de barras
const data = [{
    x: redes,
    y: usuarios,
    type: 'bar',
    marker: {
        color: '#4CAF50',
    }
}];

// Layout do gráfico
const layout = {
    title: {
        text: 'Usuários Ativos por Rede Social (em bilhões)',
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

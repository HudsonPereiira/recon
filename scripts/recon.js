//JS DO SELECT COM OS MUNICÍPIOS DO ES
// Lista de todos os 78 municípios do Espírito Santo
// Lista de todos os 78 municípios do Espírito Santo
const municipiosES = [
    "Afonso Cláudio", "Água Doce do Norte", "Águia Branca", "Alegre", "Alfredo Chaves", "Alto Rio Novo", "Anchieta", "Apiacá", "Aracruz",
    "Atilio Vivacqua", "Baixo Guandu", "Barra de São Francisco", "Boa Esperança", "Bom Jesus do Norte", "Brejetuba", "Cachoeiro de Itapemirim",
    "Cariacica", "Castelo", "Colatina", "Conceição da Barra", "Conceição do Castelo", "Divino de São Lourenço", "Domingos Martins", "Dores do Rio Preto",
    "Ecoporanga", "Fundão", "Governador Lindenberg", "Guaçuí", "Guarapari", "Ibatiba", "Ibiraçu", "Ibitirama", "Iconha", "Irupi", "Itaguaçu",
    "Itapemirim", "Itarana", "Iúna", "Jaguaré", "Jerônimo Monteiro", "João Neiva", "Laranja da Terra", "Linhares", "Mantenópolis", "Marataízes",
    "Marechal Floriano", "Marilândia", "Mimoso do Sul", "Montanha", "Mucurici", "Muniz Freire", "Muqui", "Nova Venécia", "Pancas", "Pedro Canário",
    "Pinheiros", "Piúma", "Ponto Belo", "Presidente Kennedy", "Rio Bananal", "Rio Novo do Sul", "Santa Leopoldina", "Santa Maria de Jetibá",
    "Santa Teresa", "São Domingos do Norte", "São Gabriel da Palha", "São José do Calçado", "São Mateus", "São Roque do Canaã", "Serra",
    "Sooretama", "Vargem Alta", "Venda Nova do Imigrante", "Viana", "Vila Pavão", "Vila Valério", "Vila Velha", "Vitória"
];

// Função para popular o select com os municípios

function popularMunicipios() {
    // Selects que serão populados
    const selects = [document.getElementById('municipios'), document.getElementById('municipios2'), document.getElementById('municipios3')];
    selects.forEach(selectMunicipios => {

        // Limpa as opções atuais
        selectMunicipios.innerHTML = '';

        // Adiciona a primeira opção padrão
        const optionPadrao = document.createElement('option');
        optionPadrao.value = '';
        optionPadrao.textContent = 'Selecione um município';
        selectMunicipios.appendChild(optionPadrao);

        // Adiciona as opções dos municípios
        municipiosES.forEach(municipio => {
            const option = document.createElement('option');
            option.value = municipio;
            option.textContent = municipio;
            selectMunicipios.appendChild(option);
        });
    });
}

// Chama a função para popular os selects ao carregar a página
document.addEventListener('DOMContentLoaded', popularMunicipios);

// Chama a função para popular os municípios ao carregar a página
document.addEventListener('DOMContentLoaded', popularMunicipios);





// JS DA TABELA DE CONTATOS TELEFÔNICOS
document.addEventListener('DOMContentLoaded', function () {
    // Função para adicionar uma linha na tabela de contatos
    function adicionarLinhaContato() {
        var table = document.getElementById('contatos-table').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();
        var rowCount = table.rows.length;

        var cellNumero = newRow.insertCell(0);
        cellNumero.innerHTML = rowCount;

        var cellCargo = newRow.insertCell(1);
        cellCargo.innerHTML = '<input type="text" class="full-width" placeholder="Informe o cargo">';

        var cellNome = newRow.insertCell(2);
        cellNome.innerHTML = '<input type="text" class="full-width" placeholder="Informe o nome">';

        var cellTelefone = newRow.insertCell(3);
        cellTelefone.innerHTML = '<input type="text" class="full-width" placeholder="Informe o telefone">';

        var cellAcoes = newRow.insertCell(4);
        cellAcoes.innerHTML = '<button class="remove-btn" onclick="removerLinhaContato(this)">Remover</button>';
    }

    // Adicionar evento de clique para o botão de adicionar contato
    document.getElementById("add-contato").addEventListener('click', function () {
        adicionarLinhaContato();
    });

    // Adicionar uma linha inicial quando a página carregar
    adicionarLinhaContato();
});

// Função para remover uma linha da tabela de contatos
function removerLinhaContato(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Reordenar os números das linhas após remover
    var table = document.getElementById('contatos-table').getElementsByTagName('tbody')[0];
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i + 1;
    }
}

// Chama inicialmente a função para adicionar a primeira linha na tabela de contatos
adicionarLinhaContato();

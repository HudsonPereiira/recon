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






// JS DOS CONTATOS TELEFÔNICOS
document.addEventListener('DOMContentLoaded', function () {
    // Função para adicionar uma linha na tabela de contatos
    function adicionarLinhaContato() {
        var table = document.getElementById('contatos-table').getElementsByTagName('tbody')[0];
        var rowCount = table.rows.length;

        var newRow = table.insertRow();

        var cellNumero = newRow.insertCell(0);
        cellNumero.textContent = rowCount + 1; // Mostra o número de linha

        var cellCargo = newRow.insertCell(1);
        var inputCargo = document.createElement('input');
        inputCargo.type = 'text';
        inputCargo.className = 'full-width';
        inputCargo.placeholder = 'Informe o cargo';
        cellCargo.appendChild(inputCargo);

        var cellNome = newRow.insertCell(2);
        var inputNome = document.createElement('input');
        inputNome.type = 'text';
        inputNome.className = 'full-width';
        inputNome.placeholder = 'Informe o nome';
        cellNome.appendChild(inputNome);

        var cellTelefone = newRow.insertCell(3);
        var inputTelefone = document.createElement('input');
        inputTelefone.type = 'text';
        inputTelefone.className = 'full-width';
        inputTelefone.placeholder = 'Informe o telefone';
        cellTelefone.appendChild(inputTelefone);

        var cellAcoes = newRow.insertCell(4);
        var buttonRemover = document.createElement('button');
        buttonRemover.className = 'remove-btn';
        buttonRemover.textContent = 'Remover';
        buttonRemover.addEventListener('click', function () {
            removerLinhaContato(newRow);
        });
        cellAcoes.appendChild(buttonRemover);
    }

    // Chama a função para adicionar a primeira linha na tabela de contatos
    adicionarLinhaContato();

    // Adicionar evento de clique para o botão de adicionar contato
    document.getElementById("add-contato").addEventListener('click', function () {
        adicionarLinhaContato();
    });

    // Função para remover uma linha da tabela de contatos
    function removerLinhaContato(row) {
        var table = document.getElementById('contatos-table').getElementsByTagName('tbody')[0];
        table.removeChild(row);

        // Reordenar os números das linhas após remover
        for (var i = 0; i < table.rows.length; i++) {
            table.rows[i].cells[0].textContent = i + 1;
        }
    }
});





// JS DA TABELA DA ORGANIZAÇÃO MILITAR
document.addEventListener('DOMContentLoaded', function () {
    // Função para adicionar uma linha na tabela de militares
    function adicionarMilitar() {
        var table = document.getElementById('militares-table').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();

        // Colunas da nova linha
        var cellNum = newRow.insertCell(0);
        var cellPosto = newRow.insertCell(1);
        var cellNome = newRow.insertCell(2);
        var cellFuncao = newRow.insertCell(3);
        var cellTelefone = newRow.insertCell(4);
        var cellRemover = newRow.insertCell(5); // Coluna para botão de remover

        // Conteúdo das colunas
        cellNum.textContent = table.rows.length; // Número de linhas
        cellPosto.innerHTML = '<input type="text" name="posto[]" placeholder="Ex: Capitão">';
        cellNome.innerHTML = '<input type="text" name="nome[]" placeholder="Ex: João da Silva">';
        cellFuncao.innerHTML = '<input type="text" name="funcao[]" placeholder="Ex: Comandante da 3ªCIA">';
        cellTelefone.innerHTML = '<input type="text" name="telefone[]" placeholder="Ex: (99) 9999-9999">';
        cellRemover.innerHTML = '<button class="remove-btn">Remover</button>'; // Botão de remover

        // Adicionar evento de clique para remover linha
        cellRemover.querySelector('.remove-btn').addEventListener('click', function () {
            var rowIndex = newRow.rowIndex; // Índice da linha que será removida

            // Remover a linha da tabela
            table.deleteRow(rowIndex);

            // Atualizar números das linhas restantes
            for (var i = rowIndex; i < table.rows.length; i++) {
                table.rows[i].cells[0].textContent = i + 1; // Atualiza o número da linha
            }
        });
    }

    // Função para adicionar linha inicial na tabela de militares
    function adicionarLinhaInicial() {
        var table = document.getElementById('militares-table').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();

        // Colunas da linha inicial
        var cellNum = newRow.insertCell(0);
        var cellPosto = newRow.insertCell(1);
        var cellNome = newRow.insertCell(2);
        var cellFuncao = newRow.insertCell(3);
        var cellTelefone = newRow.insertCell(4);
        var cellRemover = newRow.insertCell(5); // Coluna para botão de remover

        // Conteúdo das colunas da linha inicial
        cellNum.textContent = table.rows.length; // Número de linhas
        cellPosto.innerHTML = '<input type="text" name="posto[]" placeholder="Ex: Capitão">';
        cellNome.innerHTML = '<input type="text" name="nome[]" placeholder="Ex: João da Silva">';
        cellFuncao.innerHTML = '<input type="text" name="funcao[]" placeholder="Ex: Comandante da 3ªCIA">';
        cellTelefone.innerHTML = '<input type="text" name="telefone[]" placeholder="Ex: (99) 9999-9999">';
        cellRemover.innerHTML = '<button class="remove-btn">Remover</button>'; // Botão de remover

        // Adicionar evento de clique para remover linha
        cellRemover.querySelector('.remove-btn').addEventListener('click', function () {
            var rowIndex = newRow.rowIndex; // Índice da linha que será removida

            // Remover a linha da tabela
            table.deleteRow(rowIndex);

            // Atualizar números das linhas restantes
            for (var i = rowIndex; i < table.rows.length; i++) {
                table.rows[i].cells[0].textContent = i + 1; // Atualiza o número da linha
            }
        });
    }

    // Adicionar linha inicial ao carregar a página
    adicionarLinhaInicial(); // Adiciona a linha inicial ao carregar a página

    // Adicionar evento de clique para adicionar militar
    document.getElementById('addmilitar').addEventListener('click', function () {
        adicionarMilitar();
    });

    console.log('Página carregada.'); // Verifica se o evento DOMContentLoaded está ocorrendo
});











// JS DA TABELA DE ATIVIDADES
// Função para adicionar uma linha na tabela de atividades
function adicionarAtividade() {
    var table = document.getElementById('atividades-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    // Colunas da nova linha
    var cellHorario = newRow.insertCell(0);
    var cellAtividade = newRow.insertCell(1);
    var cellAcoes = newRow.insertCell(2);

    // Conteúdo das colunas
    cellHorario.innerHTML = '<input type="text" name="horario" placeholder="Ex: 08:00">';
    cellAtividade.innerHTML = '<input type="text" name="atividade" placeholder="Descrição da atividade">';
    cellAcoes.innerHTML = '<button class="remove-btn">Remover</button>';

    // Adicionar evento de clique para remover linha
    cellAcoes.querySelector('.remove-btn').addEventListener('click', function () {
        table.deleteRow(newRow.rowIndex); // Remover a linha da tabela
        // Verificar se há apenas uma linha restante e evitar a remoção se for o caso
        if (table.rows.length === 0) {
            adicionarAtividade(); // Adicionar uma nova linha se for a última linha removida
        }
    });
}

// Adicionar evento de clique para adicionar nova atividade
document.getElementById('add-atividade').addEventListener('click', function () {
    adicionarAtividade();
});

// Chamar inicialmente a função para adicionar a primeira linha na tabela de atividades
adicionarAtividade();








// JS DA TABELA DA COMITIVA
// Função para adicionar integrantes à Comitiva
// Função para adicionar uma linha na tabela da Comitiva
function adicionarLinhaComitiva() {
    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var rowCount = table.rows.length;

    var cellNumero = newRow.insertCell(0);
    cellNumero.textContent = rowCount;

    var cellInput = newRow.insertCell(1);
    cellInput.innerHTML = '<input type="text" name="integrante" placeholder="Ex: Governador">';

    var cellAcoes = newRow.insertCell(2);
    cellAcoes.innerHTML = '<button class="remove-btn">Remover</button>';

    // Adicionar evento de clique para remover linha
    cellAcoes.querySelector('.remove-btn').addEventListener('click', function () {
        removerLinhaComitiva(newRow); // Passa a linha atual para a função de remover
    });
}

// Função para remover uma linha da tabela da Comitiva
function removerLinhaComitiva(row) {
    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    table.deleteRow(row.rowIndex);

    // Atualiza os números das linhas restantes
    var rows = table.rows;
    for (var i = 0; i < rows.length; i++) {
        rows[i].cells[0].textContent = i + 1;
    }
}

// Adicionar evento de clique para o botão de adicionar integrante na Comitiva
document.getElementById('addIntegrante').addEventListener('click', function () {
    adicionarLinhaComitiva();
});

// Adicionar linha inicial ao carregar a página para a Comitiva
document.addEventListener('DOMContentLoaded', function () {
    adicionarLinhaComitiva(); // Adiciona a primeira linha ao carregar a página
});







//JS PARA OS DADOS DA SEGURANÇA
// Função para adicionar uma linha na tabela de deslocamentos
function adicionarDeslocamento() {
    var table = document.getElementById('deslocamentos-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    // Colunas da nova linha
    var cellPartida = newRow.insertCell(0);
    var cellDestino = newRow.insertCell(1);
    var cellDistancia = newRow.insertCell(2);
    var cellTempo = newRow.insertCell(3);
    var cellAcoes = newRow.insertCell(4);

    // Conteúdo das colunas
    cellPartida.innerHTML = '<input type="text" name="partida" placeholder="Ex: Local de partida">';
    cellDestino.innerHTML = '<input type="text" name="destino" placeholder="Ex: Local de destino">';
    cellDistancia.innerHTML = '<input type="text" name="distancia" placeholder="Ex: 100 km">';
    cellTempo.innerHTML = '<input type="text" name="tempo" placeholder="Ex: 1h 30m">';
    cellAcoes.innerHTML = '<button class="remove-btn">Remover</button>';

    // Adicionar evento de clique para remover linha
    cellAcoes.querySelector('.remove-btn').addEventListener('click', function () {
        table.deleteRow(newRow.rowIndex - 1); // Remover a linha da tabela
    });
}

// Função para adicionar nova linha na tabela ao clicar no botão "Adicionar Deslocamento"
document.getElementById('add-deslocamento').addEventListener('click', function () {
    adicionarDeslocamento();
});

// Adicionar linha inicial ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    adicionarDeslocamento(); // Adiciona a linha inicial
});







// JS DA TABELA DE VOOS
// Função para adicionar uma nova linha à tabela de voo
function adicionarLinhaVoo() {
    var table = document.getElementById('voo-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cellDistancia = newRow.insertCell(0);
    cellDistancia.innerHTML = '<input type="text" placeholder="Informe os Municípios">';

    var cellTempo = newRow.insertCell(1);
    cellTempo.innerHTML = '<input type="text" placeholder="Informe o tempo de voo">';

    var cellAcoes = newRow.insertCell(2);
    cellAcoes.innerHTML = '<button class="remove-btn" onclick="removerLinhaVoo(this)">Remover</button>';
}

// Função para remover uma linha da tabela de voo
function removerLinhaVoo(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Adicionar evento de clique para o botão de adicionar voo
document.getElementById('add-voo').addEventListener('click', function () {
    adicionarLinhaVoo();
});






// JS PARA CARREGAR AS FOTOS DO LOCAL DE POUSO
document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('/url/para/upload', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Limpa a galeria existente
            document.getElementById('imageGallery').innerHTML = '';

            // Adiciona cada imagem carregada à galeria
            data.forEach(image => {
                var imgElement = document.createElement('img');
                imgElement.src = image.url; // URL da imagem carregada
                imgElement.alt = image.name; // Nome da imagem para texto alternativo
                document.getElementById('imageGallery').appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error('Erro no upload:', error);
        });
});







//JS PARA ENVIO DAS FOTOS DO LOCAL DE POUSO
// scripts.js
document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os arquivos selecionados
    const file1 = document.getElementById('fileInput1').files[0];
    const file2 = document.getElementById('fileInput2').files[0];
    const file3 = document.getElementById('fileInput3').files[0];

    // Se houver um arquivo selecionado, carrega a imagem correspondente
    if (file1) {
        previewImage(file1, 'previewImage1');
    }
    if (file2) {
        previewImage(file2, 'previewImage2');
    }
    if (file3) {
        previewImage(file3, 'previewImage3');
    }
});

function previewImage(file, previewId) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const imgElement = document.getElementById(previewId);
        imgElement.src = event.target.result;
    };

    reader.readAsDataURL(file);
}







//JS para adicionar dinamicamente, novos locais de pouso
document.addEventListener("DOMContentLoaded", function () {
    let pousoCount = 1;

    const pousoContainer = document.getElementById('pouso-sections-container');
    const addLocalBtn = document.getElementById('addLocalBtn');

    addLocalBtn.addEventListener('click', function () {
        pousoCount++;
        addPousoSection(pousoCount);
    });

    function addPousoSection(number) {
        const pousoSection = document.createElement('div');
        pousoSection.className = 'pouso-section';
        pousoSection.setAttribute('data-section-number', number);

        pousoSection.innerHTML = `
            <strong>
                <p>DADOS DO LOCAL DO POUSO ${number}: <input type="text" placeholder="Informe o local do pouso"></p>
            </strong>
            <table>
                <thead>
                    <tr>
                        <th>Informações</th>
                        <th>Entradas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Local de Pouso:</td>
                        <td><input type="text" placeholder="Informe o local de pouso"></td>
                    </tr>
                    <tr>
                        <td>Tipo de Piso:</td>
                        <td><input type="text" placeholder="Informe o tipo de piso"></td>
                    </tr>
                    <tr>
                        <td>Isolamento:</td>
                        <td><input type="text" placeholder="Informe se tem isolamento"></td>
                    </tr>
                    <tr>
                        <td>Local Iluminado:</td>
                        <td><input type="text" placeholder="Informe se o local é iluminado"></td>
                    </tr>
                    <tr>
                        <td>Obstáculos:</td>
                        <td><textarea id="obstaculos" placeholder="Informe os obstáculos"></textarea></td>
                    </tr>
                    <tr>
                        <td>Local para Abastecimento:</td>
                        <td><input type="text" placeholder="Informe se tem local para abastecimento"></td>
                    </tr>
                    <tr>
                        <td>Responsável pelo Local:</td>
                        <td><input type="text" placeholder="Informe o nome e contato do responsável pelo local"></td>
                    </tr>
                </tbody>
            </table>
        
            <strong>
                <p>COORDENADAS DO LOCAL DE POUSO ${number}: <input type="text" placeholder="Informe o local do pouso"></p>
            </strong>
            <table border="1">
                <tbody>
                    <tr class="red-text">
                        <td style="width: 10%;"><input type="text" style="width: 100%;" placeholder="Digite aqui..."></td>
                        <td style="width: 40%;"><input type="text" style="width: 100%;" placeholder="Informe a latitude"></td>
                        <td style="width: 10%;"><input type="text" style="width: 100%;" placeholder="Digite aqui..."></td>
                        <td style="width: 40%;"><input type="text" style="width: 100%;" placeholder="Informe a longitude"></td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <input type="text" style="width: 100%;" placeholder="Informe o link da coordenada">
                        </td>
                    </tr>
                </tbody>
            </table>
        
            <strong>
                <p>FOTOGRAFIAS DO LOCAL DO POUSO ${number}:</p>
            </strong>
          <form id="uploadForm${number}" enctype="multipart/form-data">
        <input type="file" id="fileInput${number}_1" name="fileInput" accept="image/*">
        <input type="file" id="fileInput${number}_2" name="fileInput" accept="image/*">
        <input type="file" id="fileInput${number}_3" name="fileInput" accept="image/*">
        <button type="button" class="add-btn">Enviar Fotos</button>
        <div class="image-container">
        <div class="image-preview" id="imagePreview${number}_1"></div>
        <div class="image-preview" id="imagePreview${number}_2"></div>
        <div class="image-preview" id="imagePreview${number}_3"></div>
        </div>
        </form>
        
            <button class="remove-btn">Remover local de pouso</button><br><br>
        `;

        pousoContainer.appendChild(pousoSection);

        pousoSection.querySelector('.remove-btn').addEventListener('click', function () {
            pousoContainer.removeChild(pousoSection);
            reorganizeSections();
        });

        const fileInputs = pousoSection.querySelectorAll(`input[type="file"]`);
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener('change', function () {
                previewImages(fileInputs, number);
            });
        });

        pousoSection.querySelector('.add-btn').addEventListener('click', function (e) {
            e.preventDefault();
        });
    }

    function previewImages(inputs, number) {
        // Seleciona os contêineres de pré-visualização corretos para o número de seção atual
        const previewContainer1 = document.getElementById(`imagePreview${number}_1`);
        const previewContainer2 = document.getElementById(`imagePreview${number}_2`);
        const previewContainer3 = document.getElementById(`imagePreview${number}_3`);

        // Limpa os contêineres de pré-visualização anteriores
        previewContainer1.innerHTML = '';
        previewContainer2.innerHTML = '';
        previewContainer3.innerHTML = '';

        // Itera sobre os inputs de arquivo para carregar as imagens
        inputs.forEach(input => {
            const files = input.files;
            if (files) {
                Array.from(files).forEach(file => {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.className = 'preview-image'; // Adiciona a classe para aplicar o estilo CSS
                        img.alt = 'Imagem de pré-visualização';

                        // Cria um contêiner de pré-visualização com a mesma estrutura HTML e classe
                        const previewDiv = document.createElement('div');
                        previewDiv.className = 'image-preview'; // Adiciona a classe para aplicar o estilo CSS
                        previewDiv.appendChild(img);

                        // Decide onde adicionar a pré-visualização com base no ID do input
                        if (input.id === `fileInput${number}_1`) {
                            previewContainer1.appendChild(previewDiv);
                        } else if (input.id === `fileInput${number}_2`) {
                            previewContainer2.appendChild(previewDiv);
                        } else if (input.id === `fileInput${number}_3`) {
                            previewContainer3.appendChild(previewDiv);
                        }
                    };
                    reader.readAsDataURL(file);
                });
            }
        });
    }




    //JS para reorganizar a fila do local de pouso
    function reorganizeSections() {
        const sections = pousoContainer.querySelectorAll('.pouso-section');
        sections.forEach((section, index) => {
            const newIndex = index + 1;
            section.setAttribute('data-section-number', newIndex);
            section.querySelector('strong p').innerHTML = `DADOS DO LOCAL DO POUSO ${newIndex}: <input type="text" placeholder="Informe o local do pouso">`;
            section.querySelectorAll('strong')[1].querySelector('p').innerHTML = `COORDENADAS DO LOCAL DE POUSO ${newIndex}: <input type="text" placeholder="Informe o local do pouso">`;
            section.querySelectorAll('strong')[2].querySelector('p').innerHTML = `FOTOGRAFIAS DO LOCAL DO POUSO ${newIndex}:`;
            section.querySelector('form').id = `uploadForm${newIndex}`;
            const inputs = section.querySelectorAll('input[type="file"]');
            inputs.forEach((input, fileIndex) => {
                input.id = `fileInput${newIndex}_${fileIndex + 1}`;
            });
            section.querySelector('.image-preview').id = `imagePreview${newIndex}`;

            inputs.forEach(fileInput => {
                fileInput.addEventListener('change', function () {
                    previewImages(inputs, newIndex);
                });
            });
        });
        pousoCount = sections.length;
    }
});





//JS DA PORRA DO PDF
const downloadPdf = document.getElementById("downloadpdf");

downloadPdf.addEventListener("click", (evt) => {
    const content = document.getElementById("content").cloneNode(true); // Clona o elemento #content com todos os seus descendentes

    // Estilos CSS para o documento PDF
    const estilo = `
        <style>
            /* Estilos gerais */
body body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                color: #000;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #f0f0f0;
            }

            /* Removendo cabeçalho padrão do PDF */
            @page {
                size: auto;
                margin: 0mm;
            }

            /* Estilizando os botões */
            .button-text-hidden {
                font-size: 0;
                /* Oculta o texto dos botões */
                color: transparent;
                /* Oculta o texto dos botões */
                width: 0;
                /* Oculta o texto dos botões */
            }
 {
    font-family: Arial, sans-serif;
    /* Define a fonte padrão para o corpo */
    margin: 0;
    /* Remove margens padrão */
    padding: 0;
    /* Remove preenchimento padrão */
    color: #000;
    /* Define a cor do texto como preto */
    display: flex;
    /* Usa display flex para organização */
    flex-direction: column;
    /* Organiza os itens em coluna */
    align-items: center;
    /* Centraliza os itens horizontalmente */
    background-color: #f0f0f0;
    /* Cor de fundo para todo o corpo */
}

/* Estilos do cabeçalho */
header {
    background-color: #002c7d;
    /* Cor de fundo do cabeçalho */
    color: #ffffff;
    /* Cor do texto no cabeçalho */
    padding: 20px 0;
    /* Espaçamento interno do cabeçalho (20px acima e abaixo, 0 nos lados) */
    text-align: center;
    /* Alinha o texto ao centro */
    width: 100%;
    /* Largura total do cabeçalho */
    box-sizing: border-box;
    /* Inclui padding e borda na largura total */
    margin: 0;
    /* Remove margem padrão */
}

/* Conteúdo dentro do cabeçalho */
.header-content {
    max-width: 800px;
    /* Largura máxima do conteúdo do cabeçalho */
    width: 100%;
    /* Largura total do conteúdo do cabeçalho */
    margin: 0 auto;
    /* Centraliza o conteúdo horizontalmente */
    display: flex;
    /* Usa display flex para organização */
    align-items: center;
    /* Centraliza os itens verticalmente */
    justify-content: center;
    /* Centraliza os itens horizontalmente */
}

/* Estilo para o brasão */
.brasao {
    width: 80px;
    /* Largura do brasão */
    height: auto;
    /* Altura automática do brasão */
    margin-right: 10px;
    /* Espaçamento à direita do brasão */
}

/* Estilização dos textos dentro do cabeçalho */
.header-text {
    text-align: center;
    /* Alinha o texto à esquerda */
}

.header-text p {
    font-size: 16px;
    /* Tamanho da fonte para parágrafos */
    margin: 5px 0;
    /* Espaçamento em torno dos parágrafos */
    text-transform: uppercase;
    /* Transforma o texto em maiúsculo */
}

/* Estilos da tabela */
table {
    width: 100%;
    /* Largura total da tabela */
    border-collapse: collapse;
    /* Remove espaçamento entre as células */
    margin-bottom: 20px;
    /* Espaçamento inferior da tabela */
    border: 2px solid #002c7d;
    /* Borda da tabela */
}

/* Estilizando células de cabeçalho e dados */
th,
td {
    border: 1px solid #002c7d;
    /* Borda das células */
    padding: 8px;
    /* Espaçamento interno das células */
    text-align: center;
    /* Alinha o texto ao centro */
}

/* Estilizando células de cabeçalho */
th {
    background-color: #f2f2f2;
    /* Cor de fundo das células de cabeçalho */
    color: #002c7d;
    /* Cor do texto nas células de cabeçalho */
    font-weight: bold;
    /* Texto em negrito */
    text-transform: uppercase;
    /* Transforma o texto em maiúsculo */
}

/* Estilos das fotos carregadas */
.image-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    width: calc(100% - 40px);
    box-sizing: border-box;
}

.image-preview {
    width: 7cm;
    height: 5cm;
    border: 1px solid #ccc;
    overflow: hidden;
    position: center;
    box-sizing: border-box;
    margin-bottom: 10px;
}

.image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


/* Estilização da área de segurança da aeronave */
.area_segura {
    max-width: 100%;
    /* Largura máxima da área de segurança */
    width: 100%;
    /* Largura total da área de segurança */
    height: auto;
    /* Altura automática da área de segurança */
}

/* Centralizar placeholder nos inputs */
input[type="text"]::placeholder {
    text-align: center;
    /* Centraliza o texto do placeholder */
}

/* Ajuste de largura para todos os inputs fora das tabelas e alinhamento à esquerda */
input[type="text"] {
    width: 100%;
    /* Largura total para todos os inputs */
    max-width: calc(100% - 40px);
    /* Largura máxima calculada para manter o conteúdo dentro da margem */
    box-sizing: border-box;
    /* Inclui padding e borda na largura total */
    text-align: left;
    /* Alinha o texto à esquerda */
}


/* Centralizar texto dentro dos inputs nas tabelas */
table input[type="text"] {
    text-align: center;
    /* Centraliza o texto nos inputs */
}

/* Estilizando os botões */
button {
    padding: 10px 20px;
    /* Espaçamento interno do botão */
    border: none;
    /* Remove a borda do botão */
    cursor: pointer;
    /* Define o cursor como ponteiro */
    border-radius: 5px;
    /* Borda arredondada */
    font-size: 16px;
    /* Tamanho da fonte do botão */
    margin-right: 10px;
    /* Espaçamento à direita do botão */
    text-align: center;
    /* Centraliza o texto dentro do botão */
}

/* Botões de adição (azuis) */
.add-btn {
    background-color: #0578f3;
    /* Cor de fundo do botão de adição */
    color: #fff;
    /* Cor do texto no botão de adição */
}

/* Botões de remoção (vermelhos) */
.remove-btn {
    background-color: #dc3545;
    /* Cor de fundo do botão de remoção */
    color: #fff;
    /* Cor do texto no botão de remoção */
}

/* Botão de selecionar arquivos (branco) */
.button-select-file {
    background-color: #fff;
    /* Cor de fundo do botão de seleção de arquivo */
    color: #000;
    /* Cor do texto no botão de seleção de arquivo */
}

/* Botão de enviar fotos (verde) */
.button-send-photo {
    background-color: #28a745;
    /* Cor de fundo do botão de enviar foto */
    color: #fff;
    /* Cor do texto no botão de enviar foto */
}

/* Estilizando o select */
select {
    font-family: Arial, sans-serif;
    /* Define a fonte para o select */
    font-size: 16px;
    /* Tamanho da fonte do select */
    color: #000;
    /* Cor do texto no select */
    max-width: calc(100% - 40px);
    /* Largura máxima calculada para manter o conteúdo dentro da margem */
    box-sizing: border-box;
    /* Inclui padding e borda na largura total */
    padding: 5px;
    /* Espaçamento interno do select */
    margin-bottom: 10px;
    /* Espaçamento inferior do select */
    font-weight: bold;
    /* Texto em negrito no select */
}


footer {
    text-align: center;
    /* Centraliza o conteúdo do footer */
}

/* Estilizando o select */
select#municipios3 {
    font-family: Arial, sans-serif;
    /* Mesma fonte dos cabeçalhos das tabelas */
    font-size: 16px;
    /* Mesmo tamanho de fonte dos cabeçalhos das tabelas */
    color: #002c7d;
    /* Mesma cor dos cabeçalhos das tabelas */
    max-width: calc(100% - 40px);
    /* Largura máxima calculada para manter o conteúdo dentro da margem */
    box-sizing: border-box;
    /* Inclui padding e borda na largura total */
    padding: 5px;
    /* Espaçamento interno do select */
    margin-bottom: 10px;
    /* Espaçamento inferior do select */
    font-weight: bold;
    /* Texto em negrito */
    text-align: center;
    /* Alinha o texto ao centro */
    text-transform: uppercase;
    /* Transforma o texto em maiúsculo */
}



/* Media Query para dispositivos móveis */
@media only screen and (max-width: 600px) {

    /* Ajustes específicos para dispositivos móveis */
    .header-content {
        flex-direction: column;
        /* Altera a direção para coluna */
        align-items: center;
        /* Centraliza verticalmente */
        text-align: center;
        /* Centraliza o texto */
    }

    .brasao {
        margin-bottom: 10px;
        /* Espaçamento inferior do brasão */
    }

    .header-text p {
        font-size: 14px;
        /* Tamanho da fonte reduzido */
    }

    table {
        font-size: 12px;
        /* Reduz o tamanho da fonte da tabela */
    }

    th,
    td {
        padding: 5px;
        /* Reduz o espaçamento interno das células */
    }

    .image-preview {
        width: 100%;
        /* Largura total para imagens */
        height: auto;
        /* Altura automática */
    }

    input[type="text"],
    select {
        width: 100%;
        /* Largura total para inputs e selects */
    }

    .button-send-photo,
    .button-select-file {
        margin-bottom: 10px;
        /* Espaçamento inferior dos botões */
    }
}

@media only screen and (max-width: 600px) {

    /* Ajustes específicos para dispositivos móveis */
    .header-content {
        flex-direction: column;
        /* Altera a direção para coluna */
        align-items: center;
        /* Centraliza verticalmente */
        text-align: center;
        /* Centraliza o texto */
    }

    .brasao {
        margin-bottom: 10px;
        /* Espaçamento inferior do brasão */
    }

    .header-text p {
        font-size: 14px;
        /* Tamanho da fonte reduzido */
    }

    table {
        font-size: 12px;
        /* Reduz o tamanho da fonte da tabela */
    }

    th,
    td {
        padding: 5px;
        /* Reduz o espaçamento interno das células */
    }

    .image-preview {
        width: 100%;
        /* Largura total para imagens */
        height: auto;
        /* Altura automática */
    }

    input[type="text"],
    select {
        width: 100%;
        /* Largura total para inputs e selects */
    }

    .button-send-photo,
    .button-select-file {
        margin-bottom: 10px;
        /* Espaçamento inferior dos botões */
    }
}


body {
    padding: 5%
}
    



/* CSS do textarea */
table td textarea {
    width: 91.5%;
    box-sizing: border-box; /* Inclui padding e border na largura total */
    resize: vertical; /* Permite redimensionamento vertical */
}


        </style>
    `;


    // JS DA PORRA DO PDF
    // Abrindo uma nova janela
    const win = window.open('', '', 'height=700, width=700');
    win.document.write('<html><head><title>Recon</title>');
    win.document.write(estilo); // Inclui os estilos CSS no cabeçalho do documento
    win.document.write('</head><body>');

    // Adicionando o conteúdo clonado ao documento da nova janela
    win.document.body.appendChild(content);

    // Capturando dados dos inputs e textareas nas tabelas
    const tables = win.document.getElementsByTagName('table');
    for (let table of tables) {
        const rows = table.getElementsByTagName('tr');
        for (let row of rows) {
            const cells = row.getElementsByTagName('td');
            for (let cell of cells) {
                const inputs = cell.getElementsByTagName('input');
                for (let input of inputs) {
                    win.document.write(input.value + ' '); // Adiciona valor do input
                }
                const textareas = cell.getElementsByTagName('textarea');
                for (let textarea of textareas) {
                    win.document.write(textarea.value + ' '); // Adiciona valor da textarea
                }
            }
        }
    }

    win.document.write('</body></html>');
    win.print();
});





// Função para ajustar a altura do textarea
function ajustarAltura(textarea) {
    textarea.style.height = 'auto'; // Reseta a altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Define a altura com base no conteúdo
}

// Função para aplicar o ajuste de altura a um textarea
function aplicarAjusteAltura(textarea) {
    textarea.addEventListener('input', () => ajustarAltura(textarea));
    ajustarAltura(textarea); // Ajusta a altura inicial
}

// Função para aplicar o ajuste de altura a todos os textareas na página
function aplicarAjusteAlturaATodos() {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => aplicarAjusteAltura(textarea));
}

// Chama a função para ajustar os textareas existentes
aplicarAjusteAlturaATodos();

// Observa alterações no DOM e aplica ajuste de altura a novos textareas
const observer = new MutationObserver(() => {
    aplicarAjusteAlturaATodos();
});

// Configura o observer para observar mudanças no DOM
observer.observe(document.body, {
    childList: true,
    subtree: true
});












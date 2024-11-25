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
        cellFuncao.innerHTML = '<textarea placeholder="Ex: Comandante da 3ªCIA"></textarea>';
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
        cellFuncao.innerHTML = '<textarea placeholder="Ex: Comandante da 3ªCIA"></textarea>';
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
    cellAtividade.innerHTML = '<textarea id="atividades" placeholder="Informe as atividades"></textarea>';
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






// JS PARA CARREGAR AS FOTOS DO LOCAL DO POUSO
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







//JS PARA ENVIO DAS FOTOS DO LOCAL DO POUSO
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





// Função para converter número arábico para número romano
function toRoman(num) {
    if (typeof num !== 'number') return false;
    var digits = String(+num).split(''),
        key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
               '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
               '','I','II','III','IV','V','VI','VII','VIII','IX'],
        roman = '',
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    return Array(+digits.join('') + 1).join('M') + roman;
}


//JS para adicionar dinamicamente, novos locais do pouso
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
        pousoSection.setAttribute('data-section-number', toRoman(number));

        pousoSection.innerHTML = `
            <content>
                <strong>
                    <p>DADOS DO LOCAL DO POUSO ${toRoman(number)} <input type="text" placeholder="Informe o local do pouso"></p>
                </strong>
                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Informações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Local do Pouso:</td>
                            <td><input type="text" placeholder="Informe o local do pouso"></td>
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
            </content>
            <strong>
                <strong>
                    <p>COORDENADAS DO LOCAL DO POUSO ${toRoman(number)} <input type="text" placeholder="Informe o local do pouso"></p>
                </strong>
                <table border="1">
                            <tbody>
                                <tr class="red-text">
                                    <td><input type="text" placeholder="" id="coordenada"></td>
                                    <td><input type="text" placeholder="Informe a latitude" id="coordenada2"></td>
                                    <td><input type="text" placeholder="" id="coordenada"></td>
                                    <td><input type="text" placeholder="Informe a longitude" id="coordenada2"></td>
                                </tr>
                                <tr>
                                    <td colspan="4">          
                                        <input type="url" id="link" name="link" placeholder="Link da coordenada">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            </content>
            <content>
                <strong>
                    <p>FOTOGRAFIAS DO LOCAL DO POUSO ${toRoman(number)} </p>
                </strong>
            <form id="uploadForm${toRoman(number)}" enctype="multipart/form-data">
            <input type="file" id="fileInput${toRoman(number)}_1" name="fileInput" accept="image/*">
            <input type="file" id="fileInput${toRoman(number)}_2" name="fileInput" accept="image/*">
            <input type="file" id="fileInput${toRoman(number)}_3" name="fileInput" accept="image/*">
            <button type="button" class="add-btn">Enviar Fotos</button>
            <div class="image-container">
            <div class="image-preview" id="imagePreview${toRoman(number)}_1"></div>
            <div class="image-preview" id="imagePreview${toRoman(number)}_2"></div>
            <div class="image-preview" id="imagePreview${toRoman(number)}_3"></div>
            </div>
            </form>
        </content>
        
            <button class="remove-btn">Remover local do pouso</button><br><br>
        `;

        pousoContainer.appendChild(pousoSection);

        pousoSection.querySelector('.remove-btn').addEventListener('click', function () {
            pousoContainer.removeChild(pousoSection);
            reorganizeSections();
        });

        const fileInputs = pousoSection.querySelectorAll(`input[type="file"]`);
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener('change', function () {
                previewImages(fileInputs, toRoman(number));
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




    //JS para reorganizar a fila do local do pouso
    function reorganizeSections() {
        const sections = pousoContainer.querySelectorAll('.pouso-section');
        sections.forEach((section, index) => {
            const newIndex = index + 1;
            section.setAttribute('data-section-number', newIndex);
            section.querySelector('strong p').innerHTML = `DADOS DO LOCAL DO POUSO ${newIndex}: <input type="text" placeholder="Informe o local do pouso">`;
            section.querySelectorAll('strong')[1].querySelector('p').innerHTML = `COORDENADAS DO LOCAL DO POUSO ${newIndex}: <input type="text" placeholder="Informe o local do pouso">`;
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







// JS da porra do PDF
const downloadPdf = document.getElementById("downloadpdf");

downloadPdf.addEventListener("click", (evt) => {
    const content = document.getElementById("content").cloneNode(true); // Clona o elemento #content com todos os seus descendentes

    // Atualizando os valores dos inputs e textareas nas tabelas do conteúdo clonado
    const tables = content.getElementsByTagName('table');
    for (let table of tables) {
        const rows = table.getElementsByTagName('tr');
        for (let row of rows) {
            const cells = row.getElementsByTagName('td');
            for (let cell of cells) {
                const inputs = cell.getElementsByTagName('input');
                for (let input of inputs) {
                    if (input.id === 'link' && input.value) {
                        const a = document.createElement('a');
                        a.href = input.value.startsWith('http') ? input.value : `https://${input.value}`;
                        a.textContent = input.value;
                        a.target = '_blank';
                        cell.replaceChild(a, input); // Substitui o input pelo link
                    } else {
                        const span = document.createElement('span');
                        span.textContent = input.value;
                        cell.replaceChild(span, input); // Substitui o input pelo span contendo o valor do input
                    }
                }

                const textareas = cell.getElementsByTagName('textarea');
                for (let textarea of textareas) {
                    const span = document.createElement('span');
                    span.textContent = textarea.value;
                    cell.replaceChild(span, textarea); // Substitui a textarea pelo span contendo o valor da textarea
                }
            }
        }
    }

    // Usando html2pdf.js para gerar o PDF
    const opt = {
        margin:       0.3,
        filename:     'Recon.pdf',
        image:        { type: 'jpeg', quality: 1.00 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().from(content).set(opt).save();
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
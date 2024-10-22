document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente oculta o container de mensagens personalizadas e avisos
    const logincontainer = document.querySelector('.logincontainer');
    logincontainer.classList.remove('hidden');

    const avisospage = document.querySelector('.avisospage');
    avisospage.classList.add('hidden');

    const avisosfrequentes = document.querySelector('.avisosfrequentes');
    avisosfrequentes.classList.add('hidden');

    const avisosmsg = document.querySelector('.avisosmsg');
    avisosmsg.classList.add('hidden');

    const avisosjantares = document.querySelector('.avisosjantares');
    avisosjantares.classList.add('hidden');

    const jantares = document.querySelector('.jantares');
    jantares.classList.add('hidden');

    const cancel = document.querySelector('.cancel');
    cancel.classList.add('hidden');

    const capacidade = document.querySelector('.capacidade');
    capacidade.classList.add('hidden');

    const container = document.querySelector('.container');
    container.classList.add('hidden');

    const floating = document.querySelector('.floating');
    floating.classList.remove('hidden');

    const frequente = document.querySelector('.frequente');
    frequente.classList.add('hidden');

    const logo = document.querySelector('.logo');
    logo.classList.remove('hidden');

    const page = document.querySelector('.page');
    page.classList.add('hidden');

    const seção = document.querySelector('.seção');
    seção.classList.add('hidden');

    // Oculta o campo "Especifique:" e o campo de texto associado por padrão
    const otherSectorField = document.getElementById('otherSector');
    const otherSectorLabel = document.getElementById('otherSectorLabel');
    otherSectorField.style.display = 'none'; // Usa o estilo para ocultar
    otherSectorLabel.style.display = 'none'; // Usa o estilo para ocultar

    // Manipulação do formulário de login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        // Função para carregar a planilha e validar os dados
        function validarDadosComPlanilha() {
            const fileInput = 'assets/src/arquivos/Info Login MedCof Scripts.xlsx';  // Caminho da sua planilha
            fetch(fileInput)
                .then(res => res.arrayBuffer())
                .then(data => {
                    const workbook = XLSX.read(data, { type: 'array' });
                    const sheetName = workbook.SheetNames[0];  // Seleciona a primeira aba
                    const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);  // Converte a aba em JSON
    
    
                    // Busca o usuário na planilha com as colunas "Email" e "Senha"
                    const usuarioEncontrado = sheet.find(row => row['Email'] === email && row['Senha'] === password && row['Nome'] === username);
    
                    console.log("Usuário Encontrado:", usuarioEncontrado);  // Verifica se o usuário foi encontrado
    
                    if (usuarioEncontrado) {
                        // Se o usuário foi encontrado, continua com o login
                        avisospage.classList.remove('hidden');
                        avisosfrequentes.classList.add('hidden');
                        avisosmsg.classList.add('hidden');
                        avisosjantares.classList.add('hidden');
                        cancel.classList.add('hidden');

                        capacidade.classList.add('hidden');
                        jantares.classList.add('hidden')
                        container.classList.add('hidden');
                        floating.classList.remove('hidden')
                        frequente.classList.add('hidden');
                        logo.classList.add('hidden');
                        page.classList.remove('hidden');
                        seção.classList.remove('hidden');
                        logincontainer.classList.add('hidden');
                    } else {
                        // Se o usuário não foi encontrado, mostra mensagem de erro
                        alert('Por favor, insira um nome de usuário e senha válidos.');
                    }
                })
                .catch(error => {
                    console.error("Erro ao carregar a planilha: ", error);
                    alert('Erro ao carregar os dados de validação.');
                });
        }
        // Chama a função para validar com a planilha
        validarDadosComPlanilha();
    });

        document.getElementById('btnpage').addEventListener('click', function() {
            var section = document.getElementById('page');
            avisospage.classList.remove('hidden');
            avisosmsg.classList.add('hidden');
            avisosfrequentes.classList.add('hidden');
            avisosjantares.classList.add('hidden');
            cancel.classList.add('hidden');

            capacidade.classList.add('hidden')
            jantares.classList.add('hidden')
            container.classList.add('hidden');
            floating.classList.remove('hidden')
            frequente.classList.add('hidden');
            page.classList.remove('hidden')
    });

        document.getElementById('btnFrequentes').addEventListener('click', function() {
            var section = document.getElementById('frequente');
            avisospage.classList.add('hidden');
            avisosmsg.classList.add('hidden');
            avisosjantares.classList.add('hidden');
            avisosfrequentes.classList.remove('hidden');
            cancel.classList.add('hidden');
        
            capacidade.classList.add('hidden')
            jantares.classList.add('hidden')
            container.classList.add('hidden');
            floating.classList.remove('hidden')
            frequente.classList.remove('hidden');
            page.classList.add('hidden')
    });

        document.getElementById('btncancel').addEventListener('click', function() {
            var section = document.getElementById('cancel');
            avisospage.classList.add('hidden');
            avisosmsg.classList.add('hidden');
            avisosfrequentes.classList.add('hidden');
            avisosjantares.classList.add('hidden');
            cancel.classList.remove('hidden');

            capacidade.classList.add('hidden')
            jantares.classList.add('hidden')
            container.classList.add('hidden');
            floating.classList.remove('hidden')
            frequente.classList.add('hidden');
            floating.classList.add('hidden')
            page.classList.add('hidden')
    });

        document.getElementById('btnAutomatedMessages').addEventListener('click', function() {
            var section = document.getElementById('avisos') & ('messageContainer');
            avisospage.classList.add('hidden');
            avisosfrequentes.classList.add('hidden');
            avisosmsg.classList.remove('hidden');
            avisosjantares.classList.add('hidden');
            cancel.classList.add('hidden');

            capacidade.classList.add('hidden');
            jantares.classList.add('hidden')
            container.classList.remove('hidden');
            floating.classList.remove('hidden')
            frequente.classList.add('hidden');
            page.classList.add('hidden');
    });

        document.getElementById('btnJantares').addEventListener('click', function() {
            var section = document.getElementById('jantares');
            avisospage.classList.add('hidden');
            avisosmsg.classList.add('hidden');
            avisosfrequentes.classList.add('hidden');
            avisosjantares.classList.remove('hidden');
            cancel.classList.add('hidden');

            capacidade.classList.add('hidden');  
            jantares.classList.remove('hidden')
            container.classList.add('hidden');
            floating.classList.remove('hidden')
            frequente.classList.add('hidden');
            page.classList.add('hidden')
    });

        document.getElementById('btncapacidade').addEventListener('click', function() {
            var section = document.getElementById('capacidade');
            avisospage.classList.add('hidden');
            avisosmsg.classList.add('hidden');
            avisosfrequentes.classList.add('hidden');
            avisosjantares.classList.add('hidden');
            cancel.classList.add('hidden');

            capacidade.classList.remove('hidden')
            jantares.classList.add('hidden')
            container.classList.add('hidden');
            floating.classList.remove('hidden')
            frequente.classList.add('hidden');
            floating.classList.add('hidden')
            page.classList.add('hidden')
    });
    // Manipulação de eventos para o carregamento do arquivo
    document.getElementById('fileInput').addEventListener('change', handleFile);

    // Manipulação dos botões de seleção
    document.getElementById('selectAllButton').addEventListener('click', () => {
        selectAllRows();
        updateActionButtonStates('selectAll');
    });

    document.getElementById('deselectAllButton').addEventListener('click', () => {
        deselectAllRows();
        updateActionButtonStates('deselectAll');
    });

    // Gera mensagens a partir da tabela
    document.getElementById('generateMessagesButton').addEventListener('click', generateMessages);

    // Inicialmente oculta o container da tabela
    document.getElementById('tableContainer').style.display = 'none';

    // Manipulação do campo de setores
    const sectorSelect = document.getElementById('sector');

    sectorSelect.addEventListener('change', function() {
        if (sectorSelect.value === 'Outros') {
            otherSectorField.style.display = 'block'; // Mostra o campo "Especifique:"
            otherSectorLabel.style.display = 'block'; // Mostra o rótulo "Especifique:"
        } else {
            otherSectorField.style.display = 'none'; // Oculta o campo "Especifique:"
            otherSectorLabel.style.display = 'none'; // Oculta o rótulo "Especifique:"
        }
    });
});

// Função para lidar com o carregamento do arquivo
function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, {type: 'array'});

        // Exibe a lista de abas (folhas) disponíveis
        const sheetNames = workbook.SheetNames;
        displaySheetSelection(sheetNames, workbook);
    };

    reader.readAsArrayBuffer(file);
}

// Função para exibir as opções de abas
function displaySheetSelection(sheetNames, workbook) {
    // Obtém o elemento HTML onde as opções de abas serão exibidas
    const sheetSelector = document.getElementById('sheetSelector');
    
    // Limpa o conteúdo anterior do seletor de abas, se houver
    sheetSelector.innerHTML = ''; 

    // Cria um rótulo (label) para instruir o usuário a escolher uma aba
    const label = document.createElement('label');
    label.textContent = 'Escolha a aba: ';
    sheetSelector.appendChild(label); // Adiciona o rótulo ao contêiner

    // Cria um elemento <select> para exibir as opções das abas
    const select = document.createElement('select');
    select.id = 'sheetSelect'; // Define um ID para o <select>

    // Itera sobre o array de nomes de abas (sheetNames) e cria uma <option> para cada uma
    sheetNames.forEach((sheetName) => {
        const option = document.createElement('option'); // Cria um elemento <option>
        option.value = sheetName;  // Define o valor da opção como o nome da aba
        option.textContent = sheetName; // Define o texto visível da opção
        select.appendChild(option); // Adiciona a opção ao <select>
    });

    // Adiciona o seletor de abas ao contêiner
    sheetSelector.appendChild(select);

    // Cria um botão para carregar a aba selecionada
    const loadButton = document.createElement('button');
    loadButton.textContent = 'Carregar Aba'; // Define o texto do botão

    // Adiciona um ouvinte de evento ao botão para executar ações quando clicado
    loadButton.addEventListener('click', function() {
        // Obtém o nome da aba selecionada
        const selectedSheetName = select.value;
        
        // Obtém a planilha correspondente (aba) do workbook usando o nome selecionado
        const worksheet = workbook.Sheets[selectedSheetName];
        
        // Converte a planilha em um array de JSON (usando XLSX.utils.sheet_to_json)
        const json = XLSX.utils.sheet_to_json(worksheet, {header: 1, raw: false});
        
        // Chama a função que gera a tabela com os dados da aba selecionada
        generateTable(json);  
    });

    // Adiciona o botão de carregar aba ao contêiner
    sheetSelector.appendChild(loadButton);
}

// Função para gerar a tabela a partir dos dados (continua a mesma)
function generateTable(data) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    if (data.length === 0) {
        tableContainer.innerHTML = '<p>Nenhum dado encontrado no arquivo.</p>';
        return;
    }

    const table = document.createElement('table');
    table.className = 'data-table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const thSelect = document.createElement('th');
    headerRow.appendChild(thSelect);

    const columnNames = data[0];
    columnNames.forEach((header, index) => {
        const th = document.createElement('th');
        th.textContent = header || `Coluna ${index + 1}`;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    data.slice(1).forEach(row => {
        if (row.every(cell => !cell || cell.trim() === '')) return;

        const tr = document.createElement('tr');
        
        const selectButton = document.createElement('div');
        selectButton.className = 'select-button';
        selectButton.addEventListener('click', function() {
            selectButton.classList.toggle('selected');
            updateActionButtonStates();
        });
        const tdSelect = document.createElement('td');
        tdSelect.appendChild(selectButton);
        tr.appendChild(tdSelect);

        row.forEach((value, index) => {
            const td = document.createElement('td');
            td.textContent = formatDate(value);
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

// Função para gerar mensagens
function generateMessages() {
    const data = []; // Cria um array vazio para armazenar os dados das linhas selecionadas
    const tableContainer = document.getElementById('tableContainer'); // Obtém a referência do contêiner da tabela no HTML
    const rows = tableContainer.getElementsByTagName('tr'); // Captura todas as linhas da tabela

    // Captura os nomes das colunas corretamente
    const columnNames = Array.from(rows[0].getElementsByTagName('th')).slice(1).map(th => th.textContent); 
    // Transforma os cabeçalhos das colunas (exceto a primeira) em um array com os nomes das colunas

    for (let i = 1; i < rows.length; i++) { // Itera sobre as linhas da tabela, começando na segunda (linha de dados)
        const row = rows[i]; // Pega a linha atual
        const selected = row.querySelector('.select-button.selected'); // Verifica se a linha foi selecionada (classe .selected)

        if (selected) { // Se a linha foi selecionada
            const rowData = {}; // Cria um objeto vazio para armazenar os dados da linha
            const cells = row.getElementsByTagName('td'); // Obtém todas as células da linha atual

            // Ajusta o mapeamento para começar da coluna correta
            for (let j = 1; j < cells.length; j++) { // Itera sobre as células, começando na segunda
                rowData[columnNames[j - 1]] = cells[j].textContent; // Atribui o conteúdo da célula ao nome da coluna correspondente
            }

            data.push(rowData); // Adiciona o objeto da linha ao array de dados
        }
    }

    const output = document.getElementById('output'); // Obtém a referência do contêiner de saída (onde as mensagens serão exibidas)
    output.innerHTML = ''; // Limpa o conteúdo anterior no contêiner de saída

    data.forEach(rowData => { // Para cada conjunto de dados de linha selecionada
        const messageContainer = document.createElement('div'); // Cria um novo elemento <div> para armazenar a mensagem
        messageContainer.className = 'message-container'; // Define a classe do <div> como 'message-container'

        const message = document.createElement('p'); // Cria um novo elemento <p> para a mensagem
        message.className = 'message'; // Define a classe do <p> como 'message'
        message.textContent = generateMessageText(rowData); // Gera o texto da mensagem baseado nos dados da linha

        const inputContainer = document.createElement('div'); // Cria um novo <div> para conter o campo de input

        messageContainer.appendChild(message); // Adiciona a mensagem ao contêiner da mensagem
        messageContainer.appendChild(inputContainer); // Adiciona o contêiner do input ao contêiner da mensagem

        output.appendChild(messageContainer); // Adiciona o contêiner da mensagem ao contêiner de saída
    });
}

// Função para gerar o texto da mensagem
function generateMessageText(rowData) {
    const baseText = document.getElementById('textoBase').value;
    return baseText.replace(/{(\w+)}/g, (match, key) => rowData[key] || '');
}

// Função para atualizar o texto da mensagem com texto adicional
function updateMessageText(messageElement, rowData, additionalText) {
    messageElement.textContent = generateMessageText(rowData) + (additionalText ? ' ' + additionalText : '');
}

// Função para selecionar todas as linhas
function selectAllRows() {
    const selectButtons = document.querySelectorAll('.select-button');
    selectButtons.forEach(button => button.classList.add('selected'));
}

// Função para desselecionar todas as linhas
function deselectAllRows() {
    const selectButtons = document.querySelectorAll('.select-button');
    selectButtons.forEach(button => button.classList.remove('selected'));
}
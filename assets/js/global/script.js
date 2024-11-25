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

    const avisoscadastro = document.querySelector('.avisoscadastro');
    avisoscadastro.classList.add('hidden');

    const cancel = document.querySelector('.cancel');
    cancel.classList.add('hidden');

    const cadastro = document.querySelector('.cadastro');
    cadastro.classList.add('hidden');

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

    document.getElementById('togglePassword').addEventListener('click', function () {
        const passwordField = document.getElementById('password');
        const passwordFieldType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', passwordFieldType);
    
        // Alterna o ícone do botão
        this.textContent = passwordFieldType === 'password' ? '👀' : '👁‍🗨';
    });
    

    // Manipulação do formulário de login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        // Função para carregar a planilha e validar os dados
        function validarDadosComPlanilha() {
            const fileInput = 'assets/src/pages/login/Info Login MedCof Scripts.xlsx';  // Caminho da sua planilha
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
                        avisoscadastro.classList.add('hidden');
                        cadastro.classList.add('hidden');
                        cancel.classList.add('hidden');

                        container.classList.add('hidden');
                        floating.classList.remove('hidden');
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
            avisoscadastro.classList.add('hidden');
            cadastro.classList.add('hidden');
            cancel.classList.add('hidden');

            container.classList.add('hidden');
            floating.classList.remove('hidden');
            frequente.classList.add('hidden');
            page.classList.remove('hidden');
    });

        document.getElementById('btnFrequentes').addEventListener('click', function() {
            var section = document.getElementById('frequente');
            avisospage.classList.add('hidden');
            avisosmsg.classList.add('hidden');
            avisosfrequentes.classList.remove('hidden');
            avisoscadastro.classList.add('hidden');
            cadastro.classList.add('hidden');
            cancel.classList.add('hidden');
        
            container.classList.add('hidden');
            floating.classList.remove('hidden');
            frequente.classList.remove('hidden');
            page.classList.add('hidden');
    });

        document.getElementById('btncancel').addEventListener('click', function() {
            var section = document.getElementById('cancel');
            avisospage.classList.add('hidden');
            avisosmsg.classList.add('hidden');
            avisosfrequentes.classList.add('hidden');
            avisoscadastro.classList.add('hidden');
            cadastro.classList.add('hidden');
            cancel.classList.remove('hidden');

            container.classList.add('hidden');
            floating.classList.remove('hidden');
            frequente.classList.add('hidden');
            floating.classList.add('hidden');
            page.classList.add('hidden');
    });

        document.getElementById('btnAutomatedMessages').addEventListener('click', function() {
            var section = document.getElementById('messageContainer');
            avisospage.classList.add('hidden');
            avisosfrequentes.classList.add('hidden');
            avisosmsg.classList.remove('hidden');
            avisoscadastro.classList.add('hidden');
            cadastro.classList.add('hidden');
            cancel.classList.add('hidden');

            container.classList.remove('hidden');
            floating.classList.remove('hidden');
            frequente.classList.add('hidden');
            page.classList.add('hidden');
    });

        document.getElementById('btncadastro').addEventListener('click', function() {
            var section = document.getElementById('cadastro');
            avisospage.classList.add('hidden');
            avisosfrequentes.classList.add('hidden');
            avisosmsg.classList.add('hidden');
            avisoscadastro.classList.remove('hidden');
            cadastro.classList.remove('hidden');
            cancel.classList.add('hidden');

            container.classList.add('hidden');
            floating.classList.remove('hidden');
            frequente.classList.add('hidden');
            page.classList.add('hidden');
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
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, {header: 1, raw: false});
        loadFont();
        generateTable(json);
    };

    reader.readAsArrayBuffer(file);
}

// Função para carregar a fonte
function loadFont() {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    const style = document.createElement('style');
    style.innerHTML = `body { font-family: 'Montserrat', sans-serif; }`;
    document.head.appendChild(style);
}

// Função para formatar datas
function formatDate(value) {
    if (value instanceof Date) {
        return value.toLocaleDateString('pt-BR');
    } else if (typeof value === 'string' && value.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        const date = new Date(value.split('/').reverse().join('-'));
        return date.toLocaleDateString('pt-BR');
    } else {
        return value;
    }
}

// Função para gerar a tabela a partir dos dados
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

    // Adiciona a célula de seleção na primeira linha
    const thSelect = document.createElement('th');
    headerRow.appendChild(thSelect);

    // Adiciona os cabeçalhos das colunas
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
        // Verifica se a linha está vazia
        if (row.every(cell => !cell || cell.trim() === '')) return; // Ignora linhas em branco
    
        const tr = document.createElement('tr');
    
        // Adiciona a célula de seleção
        const selectButton = document.createElement('div');
        selectButton.className = 'select-button';
        selectButton.addEventListener('click', function() {
            selectButton.classList.toggle('selected');
            updateActionButtonStates();
        });
        const tdSelect = document.createElement('td');
        tdSelect.appendChild(selectButton);
        tr.appendChild(tdSelect);
    
        // Adiciona as células de dados
        row.forEach((value, index) => {
            const td = document.createElement('td');
            td.textContent = formatDate(value);
            tr.appendChild(td);
        });
    
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    tableContainer.style.display = 'block';

    // Atualiza os botões de ação após a tabela ser gerada
    selectAllRows();
    updateActionButtonStates('selectAll');
}

// Função para gerar mensagens
function generateMessages() {
    const data = [];
    const tableContainer = document.getElementById('tableContainer');
    const rows = tableContainer.getElementsByTagName('tr');

    // Captura os nomes das colunas corretamente
    const columnNames = Array.from(rows[0].getElementsByTagName('th')).slice(1).map(th => th.textContent);

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const selected = row.querySelector('.select-button.selected');

        if (selected) {
            const rowData = {};
            const cells = row.getElementsByTagName('td');

            // Ajusta o mapeamento para começar da coluna correta
            for (let j = 1; j < cells.length; j++) {
                rowData[columnNames[j - 1]] = cells[j].textContent;
            }

            data.push(rowData);
        }
    }

    const output = document.getElementById('output');
    output.innerHTML = '';

    data.forEach(rowData => {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        const message = document.createElement('p');
        message.className = 'message';
        message.textContent = generateMessageText(rowData);

        const additionalTextInput = document.createElement('input');
        additionalTextInput.addEventListener('input', function() {
            updateMessageText(message, rowData, additionalTextInput.value);
        });

        const inputContainer = document.createElement('div');
        inputContainer.className = 'input-container';
        messageContainer.appendChild(message);
        messageContainer.appendChild(inputContainer);

        output.appendChild(messageContainer);
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
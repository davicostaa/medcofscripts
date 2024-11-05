import openpyxl
from urllib.parse import quote
import webbrowser
from time import sleep
import pyautogui

webbrowser.open('https://web.whatsapp.com/')

workbook = openpyxl.load_workbook('medicos.xlsx') #nome da tabela
sleep(10)

pagina_clientes = workbook['Sheet1'] #nome da página dentro da planilha

for linha in pagina_clientes.iter_rows(min_row=2): #número da linha que inicia a ler os dados
    #nome, telefone, data
    nome = linha[0].value
    telefone = linha[1].value
    data = linha[2].value

    mensagem = f"Olá {nome} sua aula deve ser gravada até o dia {data.strftime('%d/%m/%Y')}. Favor agendar a gravação https://sistemamedcof.com.br/"

link_mensagem_whatsapp = f'https://web.whatsapp.com/send?phone={telefone}&text={mensagem}'

# Abre a URL formatada no navegador padrão
webbrowser.open(link_mensagem_whatsapp)

# Aguarda 9 segundos para garantir que a página do WhatsApp Web tenha tempo suficiente para carregar
sleep(9)

# Localiza a posição do ícone de seta na tela que indica onde clicar para enviar a mensagem
seta = pyautogui.locateCenterOnScreen('src/seta.png')

# Aguarda 2 segundos para garantir que o ícone de seta esteja completamente carregado
sleep(2)

# Clica no ícone de seta para enviar a mensagem
pyautogui.click(seta[0], seta[1])

# Aguarda 2 segundos para garantir que a mensagem tenha sido enviada
sleep(1)

# Envia um atalho de teclado para fechar a guia atual do navegador
pyautogui.hotkey('ctrl', 'w')

# Aguarda 2 segundos para garantir que a guia foi fechada corretamente
sleep(2)

# Localiza a posição do ícone de fechar (geralmente utilizado para fechar uma janela ou pop-up) na tela
fechar = pyautogui.locateCenterOnScreen('src/fechar.png')

# Aguarda 2 segundos para garantir que o ícone de fechar esteja completamente carregado
sleep(2)

# Clica no ícone de fechar para fechar a janela ou pop-up
pyautogui.click(fechar[0], fechar[1])

# Aguarda 2 segundos para garantir que a janela ou pop-up tenha sido fechada corretamente
sleep(2)

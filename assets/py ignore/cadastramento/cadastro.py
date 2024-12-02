from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Inicializa o Chrome WebDriver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# Maximiza a janela do navegador
driver.maximize_window()

# Acessa o site
driver.get('https://qbank.medcof.com.br')  # Substitua pelo URL correto

# Aguarda até que a página termine de carregar completamente
time.sleep(3)

# Espera até que o campo de e-mail esteja visível
try:
    email_field = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "email"))
    )
    print("Campo de e-mail encontrado.")
except Exception as e:
    print(f"Erro ao encontrar o campo de e-mail: {e}")
    driver.quit()

# Preenche o campo de e-mail usando JavaScript
try:
    driver.execute_script('var email = document.getElementById("email"); email.value="davicosta.job7@gmail.com"; email.dispatchEvent(new Event("input"));')
    print("E-mail preenchido via JavaScript.")
except Exception as e:
    print(f"Erro ao preencher o e-mail via JavaScript: {e}")
    driver.quit()

# Espera até o campo de senha estar visível e acessível
try:
    password_field = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "password"))
    )
    print("Campo de senha encontrado.")
except Exception as e:
    print(f"Erro ao encontrar o campo de senha: {e}")
    driver.quit()

# Preenche o campo de senha usando JavaScript
try:
    driver.execute_script('var password = document.getElementById("password"); password.value="Pedreira1010!"; password.dispatchEvent(new Event("input"));')
    print("Senha preenchida via JavaScript.")
except Exception as e:
    print(f"Erro ao preencher a senha via JavaScript: {e}")
    driver.quit()

# Simula o envio do formulário (pressiona Enter no campo de senha)
try:
    password_field.send_keys(Keys.RETURN)
    print("Formulário enviado.")
except Exception as e:
    print(f"Erro ao enviar o formulário: {e}")
    driver.quit()

# Aguarda o carregamento completo da página após o login
time.sleep(3)

# Rola a página até o final após o login
try:
    # Rola a página para baixo dentro do contêiner de rolagem (nav)
    driver.execute_script("""
        var container = document.querySelector('.scrollbar-container');
        container.scrollTop = container.scrollHeight;  // Rola até o fundo do container
    """)
    print("Rolando dentro da barra de navegação.")
except Exception as e:
    print(f"Erro ao rolar a página dentro do contêiner: {e}")

# Espera a página carregar e o link "Área Administrativa" ficar visível
try:
    # Espera até que o link "Área Administrativa" esteja visível
    area_admin_link = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, "//span[text()='Área Administrativa']"))
    )
    print("Link da 'Área Administrativa' encontrado.")
except Exception as e:
    print(f"Erro ao encontrar o link da 'Área Administrativa': {e}")
    driver.quit()

# Clica no link "Área Administrativa"
try:
    area_admin_link.click()
    print("Acessando 'Área Administrativa'...")
except Exception as e:
    print(f"Erro ao clicar no link da 'Área Administrativa': {e}")
    driver.quit()

# Espera a página de "Área Administrativa" carregar e o link "Questões" ficar visível
try:
    # Espera até que o link "Questões" esteja visível
    questoes_link = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, "//span[text()='Questões']"))
    )
    print("Link de 'Questões' encontrado.")
except Exception as e:
    print(f"Erro ao encontrar o link de 'Questões': {e}")
    driver.quit()

# Clica no link "Questões"
try:
    questoes_link.click()
    print("Acessando 'Questões'...")
except Exception as e:
    print(f"Erro ao clicar no link de 'Questões': {e}")
    driver.quit()

# Espera até que o link "Cadastro de Questões" fique visível
try:
    # Espera até que o link "Cadastro de Questões" esteja visível
    cadastro_questoes_link = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, "//span[text()='Cadastro de Questões']"))
    )
    print("Link de 'Cadastro de Questões' encontrado.")
except Exception as e:
    print(f"Erro ao encontrar o link de 'Cadastro de Questões': {e}")
    driver.quit()

# Clica no link "Cadastro de Questões"
try:
    cadastro_questoes_link.click()
    print("Acessando 'Cadastro de Questões'...")
except Exception as e:
    print(f"Erro ao clicar no link de 'Cadastro de Questões': {e}")
    driver.quit()

# Aguarda 5 segundos para visualizar a nova página
time.sleep(5)

# O navegador permanecerá aberto até que você o feche manualmente.
input("Pressione Enter para fechar o navegador...")
driver.quit()
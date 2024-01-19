// script.js

// Função para ser chamada ao clicar no botão "Sing In"
function signIn() {
    // Obter valores dos campos
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Exibir informações em um alerta
    alert("Login information submitted successfully!" + "\nEmail: " + email + "\nSenha: " + senha );
}
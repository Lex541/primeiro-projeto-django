function autenticarUsuario() {
var nomeUsuario = prompt("Digite seu nome de usuário:");
var senha = prompt("Digite sua senha");

var usuarioCorreto = "usuario";
var senhaCorreta = "senha123";


if (nomeUsuario === usuarioCorreto && senha === senhaCorreta) {
  alert("Autenticação bem-sucedida!");
} else {

  alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
}


autenticarUsuario();
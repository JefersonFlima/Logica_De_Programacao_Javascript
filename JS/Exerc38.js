var Codigo = parseInt(prompt("Digite o codigo de usuario"));
if (Codigo == 1234) {
    var Senha = parseInt(prompt("Digite a senha"));
    if (Senha == 9999) {
        alert("acesso permitido")
    } else {
        alert("senha invalida")
    }
} else {
    alert("usuario invalido")
}
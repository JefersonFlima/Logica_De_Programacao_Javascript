var nome = String(prompt("Digite o nome do produto:"));
var preco = parseFloat(prompt("Digite o preço unitario:"));
var quantidade = parseInt(prompt("Digite a quantidade:"));
total = quantidade * preco;
if (quantidade <= 5) {
    totalPagar = total * 0.98
    alert("o preço pelo produto " + nome + " sera de :" + totalPagar + "R$")
} else {
    if (quantidade > 5 && quantidade <= 10) {
        totalPagar = total * 0.97
        alert("o preço pelo produto " + nome + "sera de :" + totalPagar, "R$")
    } else {
        totalPagar = total * 0.95
        alert("o preço pelo produto " + nome + "sera de :" + totalPagar, "R$")
    }
}
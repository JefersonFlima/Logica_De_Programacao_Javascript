var EstoqueAtual = parseInt(prompt("Digite o estoque atual:"));
var EstoqueMaximo = parseInt(prompt("Digite o estoque maximo:"));
var EstoqueMin = parseInt(prompt("Digite o estoque minimo:"));
QuantMedia = (EstoqueMaximo + EstoqueMin) / 2
if (EstoqueAtual >= QuantMedia) {
    alert("não é necessario comprar estoque");
} else {
    alert("é necessario comprar estoque")
}
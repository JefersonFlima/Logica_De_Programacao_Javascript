var NumCliente = parseFloat(prompt("Digite o numero do cliente:"));
var saldo = parseFloat(prompt("Digite o saldo do cliente:"));
var debito = parseFloat(prompt("Digite o debito do cliente:"));
var credito = parseFloat(prompt("Digite o credito do cliente:"));
saldoAtual = saldo - debito + credito
if (saldoAtual <= 0) {
    alert("seu saldo  é de " + saldoAtual + ", saldo atual positivo");
} else {
    alert("seu saldo  é de " + saldoAtual + ", saldo atual negativo")
}
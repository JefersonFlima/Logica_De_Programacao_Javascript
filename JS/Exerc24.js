var salario = parseFloat(prompt("Digite o salario do funcionario:"));
var valorVendas = parseFloat(prompt("Digite o ganho em vendas:"));
if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03;
    salarioFinal = salario + comissao;
    alert("o salario final do funcionario será de: " + salarioFinal + "R$");
} else {
    comissao = (valorVendas - 1500) * 0.05
    comissao1 = 1500 * 0.03
    salarioFinal = salario + comissao + comissao1
    alert("o salario final do funcionario será de: " + salarioFinal + "R$")
}
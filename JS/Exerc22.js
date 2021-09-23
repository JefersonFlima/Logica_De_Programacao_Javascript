var horasTrabalhadas = parseInt(prompt("Digite as horas trabalhadas no mês:"));
var salarioHora = parseFloat(prompt("Digite o salario por hora:"));
if (horasTrabalhadas <= 160) {
    var salario = horasTrabalhadas * salarioHora
    alert("o salario do funcionario é de: " + salario + "R$")
} else {
    horasExtra = horasTrabalhadas - 160
    salarioExtra = (horasExtra * salarioHora) * 1.5
    salario = salarioExtra + 160 * salarioHora
    alert("o salario do funcionario é de: " + salario + "R$")
}
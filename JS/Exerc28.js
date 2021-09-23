var valor1 = parseInt(prompt("Digite um numero:"));
var valor2 = parseInt(prompt("Digite um numero:"));
var valor3 = parseInt(prompt("Digite um numero:"));
if (valor1 != valor2 && valor1 != valor3 && valor2 != valor3) {
    if (valor1 > valor2 && valor1 > valor3) {
        alert("o maior valor é o primeiro ," + valor1)
    }
    if (valor2 > valor1 && valor2 > valor3) {
        alert("o maior valor é o segundo ," + valor2)
    } else {
        alert("o maior valor é o terceiro ," + valor3)
    }
} else {
    alert("favor digitar numeros diferentes")
}
var valor1 = parseInt(prompt("Digite um numero:"));
var valor2 = parseInt(prompt("Digite um numero:"));
var valor3 = parseInt(prompt("Digite um numero:"));
if (valor1 != valor2 && valor1 != valor3 && valor2 != valor3) {
    if (valor1 > valor2 && valor1 > valor3 && valor2 > valor3) {
        alert("a ordem crescente dos numeros é: " + valor3 + "," + valor2 + "," + valor1);
    } else if (valor1 > valor2 && valor1 > valor3 && valor3 > valor2) {
        alert("a ordem crescente dos numeros é: " + valor2 + "," + valor3 + "," + valor1);
    } else if (valor2 > valor1 && valor2 > valor3 && valor1 > valor3) {
        alert("a ordem crescente dos numeros é: " + valor3 + "," + valor1 + "," + valor2);
    } else if (valor2 > valor1 && valor2 > valor3 && valor3 > valor1) {
        alert("a ordem crescente dos numeros é: " + valor1 + "," + valor3 + "," + valor2);
    } else if (valor3 > valor1 && valor3 > valor2 && valor1 > valor2) {
        alert("a ordem crescente dos numeros é: " + valor2 + "," + valor1 + "," + valor3);
    } else {
        alert("a ordem crescente dos numeros é: " + valor1 + "," + valor2 + "," + valor3);
    }
} else {
    alert("favor digitar numeros diferentes");
}
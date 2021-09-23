var valor1 = parseInt(prompt("Digite um numero:"));
var valor2 = parseInt(prompt("Digite um numero:"));
var valor3 = parseInt(prompt("Digite um numero:"));
if (valor1 != valor2 && valor1 != valor3 && valor2 != valor3) {
    if (valor1 > valor2 && valor1 > valor3 && valor2 > valor3) {
        soma = valor1 + valor2;
        alert("a soma de " + valor1 + " + " + valor2 + " é igual a " + soma);
    } else if (valor1 > valor2 && valor1 > valor3 && valor3 > valor2) {
        soma = valor1 + valor3;
        alert("a soma de " + valor1 + " + " + valor3 + " é igual a " + soma);
    } else if (valor2 > valor1 && valor2 > valor3 && valor1 > valor3) {
        soma = valor2 + valor1;
        alert("a soma de " + valor2 + " + " + valor1 + " é igual a " + soma);
    } else if (valor2 > valor1 && valor2 > valor3 && valor3 > valor1) {
        soma = valor2 + valor3;
        alert("a soma de " + valor2 + " + " + valor3 + " é igual a " + soma);
    } else if (valor3 > valor1 && valor3 > valor2 && valor1 > valor2) {
        soma = valor3 + valor1;
        alert("a soma de " + valor3 + " + " + valor1 + " é igual a " + soma);
    } else {
        soma = valor3 + valor2;
        alert("a soma de " + valor3 + " + " + valor2 + " é igual a " + soma);
    }
} else {
    alert("favor digitar numeros diferentes");
}
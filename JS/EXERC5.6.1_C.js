let texto = "";
var num = 1;
var num1 = 2;
var soma = num + num1;
var cont = 1;
do {
    var somaAtual = num + num1;
    texto += "<br>" + num + " + " + num1 + " = " + somaAtual + ", soma total = " + soma;
    num = num + 2;
    num1 = num + 1;
    soma = soma + num + num1;
    cont++;
} while (cont < 51)
document.getElementById("demo").innerHTML = texto;
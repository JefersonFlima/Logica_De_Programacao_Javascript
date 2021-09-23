var contador = 0;
var num = 1;
var num1 = 2;
var soma = num + num1;
let texto = ""
while (contador < 50) {
    atual = num + num1;
    texto += "<br>" + num + " + " + num1 + " = " + atual + ", soma total = " + soma;
    num = num + 2;
    num1 = num + 1;
    soma = soma + num + num1;
    contador++;
}
document.getElementById("demo").innerHTML = texto
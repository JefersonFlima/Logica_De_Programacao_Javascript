var contador = 0;
var num = 2;
var num1 = 4;
var soma = num + num1;
let texto = "";
while (contador < 125) {
    atual = num + num1;
    texto += "<br>" + num + " + " + num1 + " = " + atual + ", soma total = " + soma;
    num = num + 4;
    num1 = num + 2;
    soma = soma + num + num1;
    contador++;
}
document.getElementById("demo").innerHTML = texto;
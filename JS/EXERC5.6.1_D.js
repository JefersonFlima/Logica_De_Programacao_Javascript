let texto = "";
var soma = 0;
var cont = 1;
do {
    if (cont % 2 == 0) {
        soma = soma + cont;
        texto += "<br>" + cont + " ,soma total atual de: " + soma;
    }
    cont++;
} while (cont < 501)
document.getElementById("demo").innerHTML = texto;
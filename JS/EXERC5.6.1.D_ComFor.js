let texto = "";
var soma = 0;
for (let cont = 1; cont < 501; cont++) {
    if (cont % 2 == 0) {
        soma = soma + cont;
        texto += "<br>" + cont + " ,soma total atual de: " + soma;
    }
}
document.getElementById("demo").innerHTML = texto;
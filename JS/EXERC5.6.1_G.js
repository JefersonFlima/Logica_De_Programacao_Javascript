let texto = "";
var acum = 3;
var cont = 0;
do {
    if (cont == 0) {
        texto += "<br>" + 3 + "^" + cont + "=" + 1;
    } else if (cont == 1) {
        texto += "<br>" + 3 + "^" + cont + "=" + 3;
    } else {
        acum = acum * 3;
        texto += "<br>" + 3 + "^" + cont + "=" + acum;
    }
    cont++;
} while (cont < 16)
document.getElementById("demo").innerHTML = texto;
let texto = "";
var acum = 3;
for (let cont = 0; cont < 16; cont++) {
    if (cont == 0) {
        texto += "<br>" + 3 + "^" + cont + "=" + 1;
    } else if (cont == 1) {
        texto += "<br>" + 3 + "^" + cont + "=" + 3;
    } else {
        acum = acum * 3;
        texto += "<br>" + 3 + "^" + cont + "=" + acum;
    }
}
document.getElementById("demo").innerHTML = texto;
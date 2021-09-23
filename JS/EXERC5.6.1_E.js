let texto = "";
var cont = 1;
do {
    if (cont % 2 == 1) {
        texto += "<br>" + cont;
    }
    cont++;
} while (cont < 21)
document.getElementById("demo").innerHTML = texto;
let texto = "";
var cont = 1;
do {
    if (cont % 4 == 0) {
        res = cont / 4;
        texto += "<br>" + cont + "/ 4" + "=" + res
    }
    cont++;
} while (cont < 201)
document.getElementById("demo").innerHTML = texto;
let texto = "";
var v1 = 1;
var v2 = 0;
var cont = 0;
do {
    var v3 = v1 + v2;
    texto += v3 + " ";
    v1 = v2;
    v2 = v3;
    cont++;
} while (cont < 16)
document.getElementById("demo").innerHTML = texto;
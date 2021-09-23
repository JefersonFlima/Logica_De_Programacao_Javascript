let texto = "";
var contador = 0;
var v2 = 0;
var v1 = 1;
while (contador < 16) {
    // 1 1 2 3 5 8 13
    v3 = v1 + v2;
    texto += v3 + " , ";
    v1 = v2;
    v2 = v3;
    contador++;
}

document.getElementById("demo").innerHTML = texto;
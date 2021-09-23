let texto = "";
let cont = 10;
do {
    var F = cont * 1.8 + 32;
    texto += "<br>" + F + "ºF";
    cont = cont + 10
} while (cont < 101)
document.getElementById("demo").innerHTML = texto;
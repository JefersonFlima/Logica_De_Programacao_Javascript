let texto = "";
var Cont = 15;
do {
    R = Cont * Cont;
    texto += "<br>" + "o valor do resultado é: " + R;
    Cont++;
} while (Cont < 201)
document.getElementById("demo").innerHTML = texto;
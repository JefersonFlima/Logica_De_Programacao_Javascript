let texto = "";
Cont = 1;
var num = parseInt(prompt("digite um numero"));
do {
    var res = num * Cont;
    texto += "<br>" + num + " x " + Cont + "=" + res;
    Cont++;
} while (Cont < 11)
document.getElementById("demo").innerHTML = texto;
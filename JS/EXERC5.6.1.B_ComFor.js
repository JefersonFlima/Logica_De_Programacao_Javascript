let texto = "";
var num = parseInt(prompt("digite um numero"));
for (let Cont = 1; Cont < 11; Cont++) {
    var res = num * Cont;
    texto += "<br>" + num + " x " + Cont + "=" + res;
}
document.getElementById("demo").innerHTML = texto;
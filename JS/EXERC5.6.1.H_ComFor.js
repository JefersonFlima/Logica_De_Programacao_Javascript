let texto = "";
var num = parseInt(prompt("digite um numero"));
var expoente = parseInt(prompt("digite um expoente"));
var acum = num;
for (let cont = 0; cont < expoente + 1; cont++) {
    if (cont == 0) {
        texto += "<br>" + num + "^" + cont + "=" + 1;
    } else if (cont == 1) {
        texto += "<br>" + num + "^" + cont + "=" + num;
    } else {
        acum = acum * num;
        texto += "<br>" + num + "^" + cont + "=" + acum;
    }
}
document.getElementById("demo").innerHTML = texto;
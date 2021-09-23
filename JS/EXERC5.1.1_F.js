let texto = "";
var num = parseInt(prompt("digite um numero"));
var expoente = parseInt(prompt("digite um expoente"));
var res = 1;
var contador = 0;
while (contador < expoente) {
    res = res * num;
    contador = contador + 1;
    texto += "<br>" + num + "^" + contador + "=" + res;
}

document.getElementById("demo").innerHTML = texto;
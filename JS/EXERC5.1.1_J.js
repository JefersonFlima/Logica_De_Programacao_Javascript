let texto = "";
let texto2 = "";
let texto3 = "";
let texto4 = "";
var contador = 50;
var soma = 0;
var NumPar = 0;
while (contador < 71) {
    if (contador % 2 == 0) {
        texto4 += "<br>" + contador;
        NumPar = NumPar + 1;
        soma = soma + contador;
        contador++;
    } else {
        contador++;
    }
}
media = soma / NumPar;
texto = "soma total =" + soma;
texto2 = "numero de pares =" + NumPar;
texto3 = "media aritmetica =" + media;
document.getElementById("demo1").innerHTML = texto;
document.getElementById("demo2").innerHTML = texto2;
document.getElementById("demo3").innerHTML = texto3;
document.getElementById("demo4").innerHTML = texto4;
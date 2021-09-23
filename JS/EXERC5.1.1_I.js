let texto = "";
let texto1 = "";
var cont = 1;
var somatorio = 0;
while (cont <= 10) {
    var num = parseInt(prompt("digite um numero"));
    somatorio = somatorio + num;
    media = somatorio / 10;
    cont++
}
texto = "o somatório de todos os valores digitados é: " + somatorio;
texto1 = "a média aritmética de todos os valores é: " + media;

document.getElementById("demo").innerHTML = texto;
document.getElementById("demo1").innerHTML = texto1;
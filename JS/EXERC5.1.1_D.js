let texto = "";
var contador = 0;
var num = 0;
while (contador < 21) {
    if (num % 2 == 1) {
        texto += "<br>" + num;
    }
    num++;
    contador++;
}
document.getElementById("demo").innerHTML = texto;
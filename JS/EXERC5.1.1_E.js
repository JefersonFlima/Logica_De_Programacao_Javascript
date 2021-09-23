let texto = "";
var expoente = 0;
var num = 3;
while (expoente < 15) {
    if (expoente == 0) {
        texto += "<br>" + 1;
    } else if (expoente == 1) {
        texto += "<br>" + num;
    } else {
        num = num * 3;
        texto += "<br>" + num;
    }
    expoente++;
}
document.getElementById("demo").innerHTML = texto;
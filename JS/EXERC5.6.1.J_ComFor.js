let texto = "";
for (let cont = 10; cont < 101; cont = cont + 10) {
    var F = cont * 1.8 + 32;
    texto += "<br>" + F + "ºF";
}
document.getElementById("demo").innerHTML = texto;
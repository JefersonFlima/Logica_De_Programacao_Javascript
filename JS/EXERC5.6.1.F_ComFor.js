let texto = "";
for (let cont = 1; cont < 201; cont++) {
    if (cont % 4 == 0) {
        res = cont / 4;
        texto += "<br>" + cont + "/ 4" + "=" + res
    }
}
document.getElementById("demo").innerHTML = texto;
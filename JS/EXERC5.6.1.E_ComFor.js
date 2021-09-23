let texto = "";
for (let cont = 1; cont < 21; cont++) {
    if (cont % 2 == 1) {
        texto += "<br>" + cont;
    }
}
document.getElementById("demo").innerHTML = texto;
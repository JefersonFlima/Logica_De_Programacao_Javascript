let texto = "";
for (let Cont = 15; Cont < 201; Cont++) {
    R = Cont * Cont;
    texto += "<br>" + "o valor do resultado é: " + R;
}
document.getElementById("demo").innerHTML = texto;
let texto = "";
for (let cont1 = 10; cont1 > 0; cont1--) {
    // primeiro contador,para verificar os numeros q sao impares
    if (cont1 % 2 == 1) {
        var fatorial = cont1;
        var num = fatorial - 1;
        if (fatorial == 1) {
            texto += fatorial + "!" + "=" + fatorial;
        } else {
            texto += fatorial + "!";
            for (let cont2 = num; cont2 > 0; cont2--) {
                // segundo contador,para calcular o fatorial do numero impar
                texto += cont2 + "!";
                fatorial = fatorial * cont2;
            }
            texto += "=" + fatorial + " <br>";
        }
    }
}
document.getElementById("demo").innerHTML = texto;
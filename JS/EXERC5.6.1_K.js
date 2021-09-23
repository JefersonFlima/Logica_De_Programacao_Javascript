let texto = "";
var cont1 = 10;
do {
    // primeiro contador,para verificar os numeros q sao impares
    if (cont1 % 2 == 1) {
        var fatorial = cont1;
        var num = fatorial - 1;
        if (fatorial == 1) {
            texto += fatorial + "!" + "=" + fatorial;
        } else {
            texto += fatorial + "!";
            var cont2 = num;
            do {
                // segundo contador,para calcular o fatorial do numero impar
                texto += cont2 + "!";
                fatorial = fatorial * cont2;
                cont2--;
            } while (cont2 > 0)
            texto += "=" + fatorial + " <br>";
        }
    }
    cont1--;
} while (cont1 > 0)
document.getElementById("demo").innerHTML = texto;
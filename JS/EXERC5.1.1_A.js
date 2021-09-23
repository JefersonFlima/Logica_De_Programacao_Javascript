var num = parseInt(prompt("Digite um numero:"));
multiplicador = 1;
let texto = "";
while (multiplicador <= 10) {
    resultado = num * multiplicador;
    texto += "<br>" + num + " vezes " + multiplicador + " = " + resultado;
    multiplicador++;
}
document.getElementById("demo").innerHTML = texto;
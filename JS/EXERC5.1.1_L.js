var valor = parseInt(prompt("digite um valor"));
valorMenor = 0;
valorMaior = valor;
while (valor >= 0) {
    var valor = parseInt(prompt("digite um valor"));
    if (valor > valorMaior) {
        valorMaior = valor;
    }
}
valorMenor = valor;
alert("o maior valor é" + valorMaior);
alert("o menor valor é" + valorMenor);
var nome = String(prompt("digite o nome do comodo"));
var largura = parseFloat(prompt("digite a largura do comodo"));
var comprimento = parseFloat(prompt("digite o comprimento do comodo"));
var areaC = comprimento * largura;
var areaT = areaC;
var situacao = String(prompt("deseja parar?"));
while (situacao == "nao") {
    var nome = String(prompt("digite o nome do comodo"));
    var largura = parseFloat(prompt("digite a largura do comodo"));
    var comprimento = parseFloat(prompt("digite o comprimento do comodo"));
    var areaC = comprimento * largura;
    var areaT = areaC + areaT;
    var situacao = String(prompt("deseja parar?"));
}
alert("a area do total da residencia é de: " + areaT + "m²");
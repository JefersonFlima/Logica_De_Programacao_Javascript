var QuantMaca = parseInt(prompt("Digite a quantidade em KG comprada de maça"));
var QuantMorango = parseInt(prompt("Digite a quantidade em KG comprada de morango"));
totalMaca = QuantMaca * 1.80;
totalMorango = QuantMorango * 2.50;
QuantFrutas = QuantMaca + QuantMorango;
totalPagar = totalMaca + totalMorango;
if (QuantMaca > 5) {
    totalMaca = QuantMaca * 1.50;
    totalPagar = totalMaca + totalMorango;
}
if (QuantMorango > 5) {
    totalMorango = QuantMorango * 2.20;
    totalPagar = totalMaca + totalMorango;
}
if (QuantFrutas > 8 || totalPagar > 25) {
    totalPagar = totalPagar * 0.90;
}
alert(" o total a pagar será de : " + totalPagar + "R$")
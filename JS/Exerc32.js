var timeA = String(prompt("Digite o nome do time A:"));
var timeB = String(prompt("Digite o nome do time B:"));
var golsA = parseInt(prompt("Digite o numero de gols do time A:"));
var golsB = parseInt(prompt("Digite o numero de gols do time B:"));
if (golsA > golsB) {
    alert("o vencedor é o time A por " + golsA + " a " + golsB);
} else {
    if (golsB > golsA) {
        alert("o vencedor é o time B por " + golsB + " a " + golsA);
    } else {
        alert("empate")
    }
}
var homemA = parseInt(prompt("digite a idade do primeiro homem"));
var homemB = parseInt(prompt("digite a idade do segundo homem"));
var mulherA = parseInt(prompt("digite a idade da primeira mulher"));
var mulherB = parseInt(prompt("digite a idade da segunda mulher"));
if (homemA != homemB && mulherA != mulherB) {
    if (homemA > homemB && mulherA > mulherB) {
        somaA = homemA + mulherB;
        somaB = homemB + mulherA;
        alert("a soma do homem mais velho e mulher mais nova é: " + somaA);
        alert("a soma do homem mais novo e mulher mais velha é: " + somaB);
    } else if (homemB > homemA && mulherB > mulherA) {
        somaA = homemB + mulherA;
        somaB = homemA + mulherB;
        alert("a soma do homem mais velho e mulher mais nova é: " + somaA);
        alert("a soma do homem mais novo e mulher mais velha é: " + somaB);
    } else if (homemA > homemB && mulherB > mulherA) {
        somaA = homemA + mulherA
        somaB = homemB + mulherB
        alert("a soma do homem mais velho e mulher mais nova é: " + somaA)
        alert("a soma do homem mais novo e mulher mais velha é: " + somaB)
    } else {
        somaA = homemB + mulherB;
        somaB = homemA + mulherA;
        alert("a soma do homem mais velho e mulher mais nova é: " + somaA)
        alert("a soma do homem mais novo e mulher mais velha é: " + somaB)
    }
} else {
    alert("favor digitar idades diferetes para pessoas de mesmo sexo")
}
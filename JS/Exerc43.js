var A = parseInt(prompt("Digite o lado A do triangulo"));
var B = parseInt(prompt("Digite o lado B do triangulo"));
var C = parseInt(prompt("Digite o lado C do triangulo"));
if (A < B + C && B < A + C && C < A + B) {
    if (A == B && B == C) {
        alert("Triângulo Equilátero")
    } else if (A == B || B == C || A == C) {
        alert("Triângulo Isósceles")
    } else {
        alert("Triângulo Escaleno")
    }
} else {
    alert("Não e possível formar um triângulo")
}
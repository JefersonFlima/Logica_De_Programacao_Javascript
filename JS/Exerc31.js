var A = parseInt(prompt("Digite uma medida:"));
var B = parseInt(prompt("Digite uma medida:"));
var C = parseInt(prompt("Digite uma medida:"));
if (A < B + C && B < A + C && C < A + B) {
    alert("é um triangulo");
} else {
    alert("nao é um triangulo");
}
var nome = String(prompt("escreva seu nome"));
var sexo = String(prompt("escreva seu sexo"));
var altura = parseFloat(prompt("escreva sua altura"));
if (sexo = "M" || (sexo = "Masculino")) {
    pesoIdeal = 72.7 * altura - 58;
    alert("a pessoa de nome " + nome + " de sexo Masculino tem o peso ideal de " + pesoIdeal);
} else {
    pesoIdeal = 62.1 * altura - 44.7;
    alert("a pessoa de nome " + nome + " de sexo Feminino tem o peso ideal de " + pesoIdeal)
}
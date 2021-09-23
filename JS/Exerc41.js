var N1 = parseInt(prompt("Digite a nota da prova 1"));
var N2 = parseInt(prompt("Digite a nota da prova 2"));
var N3 = parseInt(prompt("Digite a nota da prova 3"));
var MedExerc = parseInt(prompt("Digite a nota Media dos Exercicios"));
MedAprov = (N1 + N2 * 2 + N3 * 3 + MedExerc) / 7
if (MedAprov >= 9) {
    alert("Conceito A, nota final de : " + MedAprov);
} else {
    if (MedAprov >= 7.5) {
        alert("Conceito B, nota final de : " + MedAprov);
    } else if (MedAprov >= 6) {
        alert("Conceito C, nota final de : " + MedAprov);
    } else {
        alert("Conceito D, nota final de : " + MedAprov);
    }
}
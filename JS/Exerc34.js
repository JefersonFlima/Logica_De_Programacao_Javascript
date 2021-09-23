var X = parseInt(prompt("Digite um valor:"));
var Y = parseInt(prompt("Digite um valor:"));
Z = (X * Y) + 5;
if (Z <= 0) {
    alert("A");
} else {
    if (Z <= 100) {
        alert("B");
    } else {
        alert("C");
    }
}
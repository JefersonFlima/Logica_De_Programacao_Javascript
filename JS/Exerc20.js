var num1 = parseInt(prompt("digite um numero"));
var num2 = parseInt(prompt("digite outro numero"));
if (num1 !== num2) {
    if (num1 > num2) {
        alert("o primeiro numero é maior" + num2 + ">" + num1);
    } else {
        alert("o segundo numero é maior" + num1 + ">" + num2);
    }
} else {
    alert("favo digitar numeros diferente!!!");
}
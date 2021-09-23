let texto = "";
var v1 = 1;
var v2 = 0;
for (let cont = 0; cont < 16; cont++) {
    v3 = v1 + v2;
    texto += v3 + " ";
    v1 = v2;
    v2 = v3;
}
document.getElementById("demo").innerHTML = texto;
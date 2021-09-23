let texto = "";
var celsius = 10;
while (celsius < 101) {
    fahrenheit = celsius * 1.8 + 32;
    texto += "<br>" + "temperatura Celsius de: " + celsius + "º ";
    texto += ": temperatura fahrenheit de: " + fahrenheit + "º";
    celsius = celsius + 10;
}

document.getElementById("demo").innerHTML = texto;
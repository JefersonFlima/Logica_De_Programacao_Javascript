Gasolina = 3.30
Alcool = 2.90
var LitrosVend = parseFloat(prompt("Digite a quantia de litros vendida:"));
var combustivel = String(prompt("Digite o tipo de combustivel:"));
if (combustivel == "A" || combustivel == "a") {
    if (LitrosVend <= 20) {
        TotalPagar = Alcool * 0.97 * LitrosVend
        alert("total a pagar de : " + TotalPagar)
    } else {
        LitrosVend = LitrosVend - 20
        TotalPagar = Alcool * 0.97 * 20 + Alcool * 0.95 * LitrosVend
        alert("total a pagar de : " + TotalPagar)
    }
}
if (combustivel == "G" || combustivel == "g") {
    if (LitrosVend <= 20) {
        TotalPagar = Gasolina * 0.96 * LitrosVend
        escreval("total a pagar de : " + TotalPagar)
    } else {
        LitrosVend = LitrosVend - 20
        TotalPagar = Gasolina * 0.96 * 20 + Gasolina * 0.94 * LitrosVend
        escreval("total a pagar de : " + TotalPagar)
    }

} else {
    alert("tipo invalido")
}
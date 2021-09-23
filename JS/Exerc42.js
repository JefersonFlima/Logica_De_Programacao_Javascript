var codigo = parseInt(prompt("Digite o codigo do funcionario"));
var Nasc = parseInt(prompt("Digite o ano de nascimento"));
var Contrat = parseInt(prompt("Digite o ano de entrada na empresa"));
var anoAtual = parseInt(prompt("Digite o ano atual"));
tempTrab = anoAtual - Contrat;
idade = anoAtual - Nasc;
if (idade >= 65 || tempTrab >= 30) {
    alert("requerir aposentadoria");
    alert("idade:" + idade + " tempo trabalhado:" + tempTrab);
} else {
    if (idade >= 60 && tempTrab >= 25) {
        alert("requerir aposentadoria");
        alert("idade:" + idade + " tempo trabalhado:" + tempTrab);
    } else {
        alert("não requerir aposentadoria");
        alert("idade:" + idade + " tempo trabalhado:" + tempTrab);
    }
}
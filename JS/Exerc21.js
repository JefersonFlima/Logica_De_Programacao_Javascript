var horaI = parseInt(prompt("digite a hora de inicio do jogo"));
var horaF = parseInt(prompt("digite a hora de fim do jogo"));
var duracao = horaF - horaI;
if (duracao > 0) {
    alert("a duração do jogo foi de:" + duracao + "hrs")
} else {
    duracao = duracao + 24
    alert("a duração do jogo foi de:" + duracao + "hrs")
}
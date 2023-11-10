function pedra(){
    document.querySelector("#desligado").src = "pcpedra.png";
}
function papel(){
    document.querySelector("#desligado").src = "pcpapel.png";
}
function tesoura(){
    document.querySelector("#deslgiado").src = "pctesoura.png";
}

let placarUsuario = 0;
let placarMaquina = 0;

const choices = ["pedra", "papel", "tesoura"];

function iniciarJogo() {
    userScore = 0;
    computerScore = 0;
    atualizarPlacar();
}

function escolher(escolhaDoUsuario) {
    const escolhaDaMaquina = choices[Math.floor(Math.random() * 3)];
    const resultado = verificador(escolhaDoUsuario, escolhaDaMaquina);
    exibirResultado(resultado, escolhaDoUsuario, escolhaDaMaquina);
}

function verificador(usuario, maquina) {
    if (usuario === maquina) {
        return "Empate!";
    }
    if ((usuario === "pedra" && maquina === "tesoura") ||
        (usuario === "papel" && maquina === "pedra") ||
        (usuario === "tesoura" && maquina === "papel")) {
        placarUsuario++;
        return "Você ganhou!";
    } else {
        placarMaquina++;
        return "Você perdeu!";
    }
}

function exibirResultado(resultado, escolhaDoUsuario, escolhaDaMaquina) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `${resultado} Você escolheu <img src="${escolhaDoUsuario}.png" alt="${escolhaDoUsuario}">. A máquina escolheu <img src="${escolhaDaMaquina}.png" alt="${escolhaDaMaquina}">.`;
    atualizarPlacar();
}

function atualizarPlacar() {
    const placarUsuarioSpan = document.getElementById("user-score");
    const placarMaquinaSpan = document.getElementById("computer-score");
    placarUsuarioSpan.innerText = placarUsuario;
    placarMaquinaSpan.innerText = placarMaquina;
}

function exibirResultado(resultado, escolhaDoUsuario, escolhaDaMaquina) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `${resultado} Você escolheu <img src="${escolhaDoUsuario}.png" alt="${escolhaDoUsuario}">. A máquina escolheu <img src="${escolhaDaMaquina}.png" alt="${escolhaDaMaquina}">.`;
    atualizarPlacar();
}

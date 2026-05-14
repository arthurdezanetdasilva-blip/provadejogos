let segredo;
let jogador = 1;

const chute = document.getElementById("chute");
const msg = document.getElementById("msg");
const turno = document.getElementById("turno");
const btn = document.getElementById("btn");

function iniciar(){
    // número de 1 a 100
    segredo = Math.floor(Math.random() * 100) + 1;

    jogador = 1;

    chute.disabled = false;
    btn.disabled = false;

    turno.innerText = "🎮 Vez do Jogador 1";
    msg.innerText = "Jogo iniciado! Boa sorte!";
}

function tentar(){

    let c = Number(chute.value);

    if(c < 1 || c > 100){
        msg.innerText = "⚠ Escolha um número de 1 a 100!";
        return;
    }

    if(c === segredo){
        msg.innerText = `🏆 Jogador ${jogador} venceu! O número era ${segredo}`;
        chute.disabled = true;
        btn.disabled = true;
        turno.innerText = "Fim de jogo";
        return;
    }

    if(c < segredo){
        msg.innerText = "📈 Maior!";
    } else {
        msg.innerText = "📉 Menor!";
    }

    // troca jogador
    jogador = jogador === 1 ? 2 : 1;
    turno.innerText = `🎮 Vez do Jogador ${jogador}`;

    chute.value = "";
}
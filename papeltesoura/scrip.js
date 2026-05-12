let p1 = "";
let p2 = "";

function select(player, choice, btn){

// PLAYER 1
if(player === 1){
p1 = choice;

document.querySelectorAll("#player1 button")
.forEach(b => b.classList.remove("selected"));

btn.classList.add("selected");

document.getElementById("show1").innerText = choice;
document.getElementById("msg").innerText = "Jogador 2 escolha";
}

// PLAYER 2
if(player === 2){
p2 = choice;

document.querySelectorAll("#player2 button")
.forEach(b => b.classList.remove("selected"));

btn.classList.add("selected");

document.getElementById("show2").innerText = choice;
}

check();
}

function check(){

if(p1 === "" || p2 === "") return;

let res = document.getElementById("result");

if(p1 === p2){
res.innerText = "⚖ Empate!";
}
else if(
(p1==="pedra" && p2==="tesoura") ||
(p1==="papel" && p2==="pedra") ||
(p1==="tesoura" && p2==="papel")
){
res.innerText = "🏆 Jogador 1 venceu!";
}
else{
res.innerText = "🏆 Jogador 2 venceu!";
}

document.getElementById("msg").innerText = "Fim da rodada";
}

function reset(){

p1 = "";
p2 = "";

document.getElementById("show1").innerText = "❓";
document.getElementById("show2").innerText = "❓";
document.getElementById("result").innerText = "";
document.getElementById("msg").innerText = "Jogador 1 escolha";

document.querySelectorAll("button").forEach(b=>{
b.classList.remove("selected");
});
}
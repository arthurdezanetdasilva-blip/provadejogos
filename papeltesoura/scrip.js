let nomes = [];
let escolhas = [];
let turno = 0;

function iniciar(){

nomes[0] = document.getElementById("j1").value || "Jogador 1";
nomes[1] = document.getElementById("j2").value || "Jogador 2";

document.getElementById("inicio").classList.add("hidden");
document.getElementById("jogo").classList.remove("hidden");

document.getElementById("vez").innerHTML =
"🎯 Vez de " + nomes[0];

}

function escolher(opcao){

escolhas[turno] = opcao;

if(turno == 0){

turno = 1;

document.getElementById("msg").innerHTML =
"✅ Escolha salva!<br>Passe para " + nomes[1];

document.getElementById("vez").innerHTML =
"🎯 Vez de " + nomes[1];

return;

}

resultado();

}

function resultado(){

let j1 = escolhas[0];
let j2 = escolhas[1];

let texto = nomes[0] + ": " + emoji(j1) + "\n";
texto += nomes[1] + ": " + emoji(j2) + "\n\n";

if(j1 == j2){

texto += "😐 EMPATE!";

}else if(
(j1=="pedra" && j2=="tesoura") ||
(j1=="papel" && j2=="pedra") ||
(j1=="tesoura" && j2=="papel")
){

texto += "🏆 " + nomes[0] + " venceu!";

}else{

texto += "🏆 " + nomes[1] + " venceu!";

}

document.getElementById("msg").innerHTML = texto;

document.getElementById("vez").innerHTML = "Fim da Rodada";

setTimeout(reiniciar,4000);

}

function emoji(v){

if(v=="pedra") return "✊";
if(v=="papel") return "📄";
return "✂️";

}

function reiniciar(){

turno = 0;
escolhas = [];

document.getElementById("vez").innerHTML =
"🎯 Vez de " + nomes[0];

document.getElementById("msg").innerHTML =
"Nova rodada iniciada!";

}
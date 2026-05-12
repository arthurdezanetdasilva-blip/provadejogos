let segredo;

function setar(){
segredo = num.value;
msg.innerText = "Número definido!";
}

function tentar(){
let c = chute.value;

if(c > segredo){
msg.innerText = "📉 Menor";
}
else if(c < segredo){
msg.innerText = "📈 Maior";
}
else{
msg.innerText = "🏆 Acertou!";
}
}
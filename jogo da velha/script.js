let board = ["","","","","","","","",""];
let player = "X";

function draw(){
let html = "";

board.forEach((v,i)=>{
html += `<div class='cell' onclick='play(${i})'>${v}</div>`;
});

document.getElementById("board").innerHTML = html;
turno.innerText = "Vez: " + player;
}

function play(i){
if(board[i] !== "") return;

board[i] = player;

if(check()){
alert(player + " venceu!");
reset();
return;
}

player = player === "X" ? "O" : "X";
draw();
}

function check(){
let win = [
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
];

return win.some(c=>c.every(i=>board[i]===player));
}

function reset(){
board = ["","","","","","","","",""];
player = "X";
draw();
}

draw();
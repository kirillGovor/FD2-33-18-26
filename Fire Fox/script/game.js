var canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

canvas.style.display = "none";

var context = canvas.getContext("2d");

var fox = new Image(); //белка

var bg = new Image(); //земля

var pipe = new Image(); // островки пепядствий

var foxZerkal = new Image(); // белка отраженная в другую сторону

fox.src = "img/squirrel.png";
bg.src = "img/fon_bg.gif";
pipe.src = "img/pice.gif";
foxZerkal.src = "img/squirrelZerkal.png";

var xPosFox = 10;
var yPoxFox = canvas.height - bg.height;
function draw() {
  context.drawImage(bg, 0, canvas.height - bg.height);

}
pipe.onload = draw;
window.onresize = function (event) {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
};


//765 var fox = new Image();





var mass = {
  foxSpeed: 0,
  tickCount: 0,
  stepFox: 0,
  foxSpeedOnMap: 320,
  JumpFox: canvas.height - bg.height - 65,
  counterJumpFox: 0,
}
//1-бег в лево 2-бег в право 3- прыжок вверх 4-прыжок на северо-запад 5- прыжок на северо-восток
document.body.onkeydown = function (e) { //событие нажатия кнопок
  e = event || window.event;

  if (e.key == "ArrowLeft") {
    mass.foxSpeed = 1;
  }
  if (e.key == "ArrowRight") {
    mass.foxSpeed = 2;
  }
  if (e.key == "ArrowUp") {
    mass.foxSpeed = 3;
  }
  if (e.key == "ArrowDown") {
    mass.foxSpeed = 1111;
  }
  if (e.key == "ArrowLeft" && e.key == "ArrowUp") {
    mass.foxSpeed = 4;
  }
};


document.body.onkeyup = function (e) { //событие отпускания кнопок
  e = event || window.event;

  if (e.key == "ArrowLeft") {
    mass.foxSpeed = 0;//0-скрость
  }
  if (e.key == "ArrowRight") {
    mass.foxSpeed = 0;
  }
  if (e.key == "ArrowUp") {
    mass.foxSpeed = 0;
  }
  if (e.key == "ArrowDown") {
    mass.foxSpeed = 0;
  }
  if (e.key == "ArrowLeft" && e.key == "ArrowUp") {
    mass.foxSpeed = 0;
  }
};









var canvas=document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
canvas.style.display="none";

var context = canvas.getContext("2d");

var fox = new Image();

var bg = new Image();

var pipe = new Image();

fox.src="img/fox/0.gif";
bg.src="img/fon_border.gif";
pipe.src="img/pice.png";


var xPosFox=10;
var yPoxFox=canvas.height-bg.height;
function draw(){
    context.drawImage(bg,0,canvas.height-bg.height);
    context.drawImage(fox,xPosFox,yPoxFox)
}
pipe.onload=draw;
//765
var canvas=document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

//canvas.style.display="none";

var context = canvas.getContext("2d");

var fox = new Image();

var bg = new Image();

var pipe = new Image();

fox.src="img/squirrel.png";
bg.src="img/fon_border.gif";
pipe.src="img/pice.png";


var xPosFox=10;
var yPoxFox=canvas.height-bg.height;
function draw(){
    context.drawImage(bg,0,canvas.height-bg.height);
    
}
pipe.onload=draw;
window.onresize = function(event) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
};

fox.onload= function(){
    tick();
}
//765
var heightSQ=1;
var xSQ=0;

requestAnimationFrame(tick);
function tick(){
   // context.clearRect(0,0, canvas.width, canvas.height)
 //   xSQ= (xSQ==481?0:xSQ+68.75)
    context.drawImage(fox,-190,-50,230,230,-200,700,330,300)
    requestAnimationFrame(tick);
}
var stepSQ= 550/8;
//481.25
//68.75
//8  fox.width 
if (!window.requestAnimationFrame) {

  window.requestAnimationFrame = (function () {

    return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

        window.setTimeout(callback, 1000 / 60);

      };

  })();
}
var hash = {
  cloudSpeed: 2, //скорость облочков
  cloudstep: 0, //счетчик облочка
  CloudWay: 400, // длинна пути облочка
  CloudWayMobile: 58,// длинна пути облочка в адаптиве
  cloudSpeedMobile: 0.5,//скорость облочков в адаптиве
  counterTimer: 0,
  speedBg: 1,
  PosXSq: 0,
  stopGame:false,
  score:0,
  posXPipe:100,
}



//анимация облочек
function cloudAnimation() {
  var cloud = document.getElementById("cloud");
  var cloud_left; //счетчик, который будет сдивагить облочки

  cloud_left = Number(cloud.style.marginLeft.replace(/[^-0-9]/gim, ''));// положение блоков в y , тк они с окончанием px, берем только числа



  if (window.matchMedia("(min-width: 650px)").matches) {

    if (cloud_left == 0 || cloud_left <= hash.CloudWay && hash.cloudstep == 0) { // если облочко слишком далеко,, то его не сдивгаем
      cloud.style.marginLeft = cloud_left + hash.cloudSpeed + "px";// сдиваем облочко на 2 px
    }
    else {
      cloud.style.marginLeft = cloud_left - hash.cloudSpeed + "px";
      hash.cloudstep = 1
      if (cloud_left <= 2) {
        hash.cloudstep = 0;
      }
    }


  } else {

    if (cloud_left == 0 || cloud_left <= hash.CloudWayMobile && hash.cloudstep == 0) { // если облочко слишком далеко,, то его не сдивгаем
      cloud.style.marginLeft = cloud_left + 1 + "px";// сдиваем облочко на 2 px
    }
    else {
      cloud.style.marginLeft = cloud_left - 1 + "px";
      hash.cloudstep = 1
      if (cloud_left <= 2) {
        hash.cloudstep = 0;
      }
    }

  }


  

if (hash.stopGame==false){// если игра не закончилась
  //анимация персонажей

  //context.drawImage(bg, hash.PosXSq, canvas.height - bg.height);
  //hash.PosXSq=hash.PosXSq-hash.speedBg;

  //уменьшаем смену кадров срабатывание 1 к 5
  hash.counterTimer = hash.counterTimer + 2;
  if (hash.counterTimer > 4) {
    hash.counterTimer = 0;

    
    //на месте
    if (mass.foxSpeed == 0) {
      //чистим canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // движение земли 
      context.drawImage(bg, hash.PosXSq, canvas.height - bg.height);
      context.drawImage(bg, hash.PosXSq + bg.width, canvas.height - bg.height);
      context.drawImage(bg, hash.PosXSq + bg.width + bg.width, canvas.height - bg.height);
      if (hash.PosXSq < (-bg.width)) {
        hash.PosXSq = 0;
      }
      hash.PosXSq = hash.PosXSq - hash.speedBg;

      // движение белки
      mass.foxSpeedOnMap = mass.foxSpeedOnMap - hash.speedBg;
      context.drawImage(fox, 0, 0, 40, 55, mass.foxSpeedOnMap, canvas.height - bg.height + bg.height / 2.6, 60, 80);
      if (mass.foxSpeedOnMap<2){
        hash.stopGame=true;
      }
      //обновляем подсчет очков
      context.font = "30px Luckiest Guy";
      context.fillStyle="black"
      context.fillText("Score:"+hash.score,10,50);

      //обновляем препядствия 
      context.drawImage(pipe,hash.posXPipe,canvas.height - bg.height);
      hash.posXPipe=hash.posXPipe-hash.speedBg;
    }


    //в лево
    if (mass.foxSpeed == 1) {
      context.clearRect(0, 0, canvas.width, canvas.height)
      // движение земли 
      context.drawImage(bg, hash.PosXSq, canvas.height - bg.height);
      context.drawImage(bg, hash.PosXSq + bg.width, canvas.height - bg.height);
      context.drawImage(bg, hash.PosXSq + bg.width + bg.width, canvas.height - bg.height);
      if (hash.PosXSq < (-bg.width)) {
        hash.PosXSq = 0;
      }
      hash.PosXSq = hash.PosXSq - hash.speedBg;

       //движение белки + анимация спрйта
      context.drawImage(foxZerkal, mass.stepFox, 65, 68, 50, mass.foxSpeedOnMap, canvas.height - bg.height + bg.height / 2.6, 86, 70);
      mass.foxSpeedOnMap = mass.foxSpeedOnMap - 15;
      mass.stepFox = mass.stepFox + 68.75;
      if (mass.stepFox >= 540) {
        mass.stepFox = 0;
      }
      if (mass.foxSpeedOnMap<2){
        hash.stopGame=true;
      }
    }


    //в право
    if (mass.foxSpeed == 2) {
      context.clearRect(0, 0, canvas.width, canvas.height)
      // движение земли 
      context.drawImage(bg, hash.PosXSq, canvas.height - bg.height);
      context.drawImage(bg, hash.PosXSq + bg.width, canvas.height - bg.height);
      context.drawImage(bg, hash.PosXSq + bg.width + bg.width, canvas.height - bg.height);
      if (hash.PosXSq < (-bg.width)) {
        hash.PosXSq = 0;
      }
      hash.PosXSq = hash.PosXSq - hash.speedBg;

      //движение белки + анимация спрйта
      context.drawImage(fox, mass.stepFox, 65, 66, 50, mass.foxSpeedOnMap - 20, canvas.height - bg.height + bg.height / 2.6, 86, 70)
      mass.foxSpeedOnMap = mass.foxSpeedOnMap + 15;
      mass.stepFox = mass.stepFox + 67.7;
      if (mass.stepFox >= 540) {
        mass.stepFox = 0;
      }
      if (mass.foxSpeedOnMap<2){
        hash.stopGame=true;
      }
    }

  }

  //вверх
  if (mass.foxSpeed == 3) {
    context.clearRect(0, 0, canvas.width, canvas.height);

     // движение земли 
     context.drawImage(bg, hash.PosXSq, canvas.height - bg.height);
     context.drawImage(bg, hash.PosXSq + bg.width, canvas.height - bg.height);
     context.drawImage(bg, hash.PosXSq + bg.width + bg.width, canvas.height - bg.height);
     if (hash.PosXSq < (-bg.width)) {
       hash.PosXSq = 0;
     }

     hash.PosXSq = hash.PosXSq - hash.speedBg;
    context.drawImage(fox, 265, 130, 40, 80, mass.foxSpeedOnMap, mass.JumpFox, 60, 100);
    



    mass.JumpFox = mass.JumpFox - 5;
    mass.counterJumpFox = +1;
    if (mass.JumpFox < canvas.height - bg.height - 85) {
      mass.JumpFox = mass.JumpFox + 5;
      JumpFox = canvas.height - bg.height - 65;
    }
    if (mass.foxSpeedOnMap<2){
      hash.stopGame=true;
    }

  }

  if (mass.foxSpeed == 4) {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(bg, 0, canvas.height - bg.height);
    context.drawImage(foxZerkal, 150, 130, 45, 80, mass.foxSpeedOnMap, canvas.height - bg.height + bg.height / 2.6, 65, 100)
  }



  requestAnimationFrame(cloudAnimation);
}
else{
  var table=document.getElementById("EndGameTable");
  table.style.background="url('img/EndGameTable.gif')";
 
}

}








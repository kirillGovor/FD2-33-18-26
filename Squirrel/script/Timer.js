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

//создание блоков ловушек
var pipeBlock = [];
pipeBlock[0] = {
  x: 1000,
  y: Math.floor(Math.random() * (300 - 150)),
}

var hash = {
  cloudSpeed: 2, //скорость облочков
  cloudstep: 0, //счетчик облочка
  CloudWay: 400, // длинна пути облочка
  CloudWayMobile: 58,// длинна пути облочка в адаптиве
  cloudSpeedMobile: 0.5,//скорость облочков в адаптиве
  cloudHeightAdaptive:100,
  counterTimer: 0,
  speedBg: 1,
  PosXSq: 0,
  stopGame: false,
  score: 0,
  posPipe: 200,
  poxYJumbSq: 0,
  poxYJumbSqEnd: 3,
  vibroPhone:0,
}
//анимация облочек


function Animation() {
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




  if (hash.stopGame == false) {// если игра не закончилась
    var topSqPosition = canvas.height - bg.height + bg.height / 2.6; // высота белки


    //уменьшаем смену кадров срабатывание 1 к 5
    hash.counterTimer = hash.counterTimer + 3;
    if (hash.counterTimer > 3) {
      hash.counterTimer = 0;

      //анимация белки и ловукек


      


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
        context.drawImage(fox, 0, 0, 40, 55, mass.foxSpeedOnMap, topSqPosition, 60, 80);
        hash.poxYJumbSq = canvas.height - bg.height + bg.height / 2.6;
        if (hash.score == 0) {
          mass.foxSpeedOnMap = 400;
        }
        //обновляем подсчет очков
        context.font = "30px Luckiest Guy";
        context.fillStyle = "black";
        if (canvas.style.display != "block") { } //если cavas выключен, подсчет не вести
        else {
          hash.score = hash.score + 1;
        }
        context.fillText("Score:" + hash.score, 10, 50);
        //если очков 0, то белку не перемешаем
        if (hash.score == 0) {
          mass.foxSpeedOnMap = 400;
        }
        //если белка зашла за границу, заканчиваем игру
        if (mass.foxSpeedOnMap < 2) {
          hash.stopGame = true;
        }

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
        context.drawImage(foxZerkal, mass.stepFox, 65, 68, 50, mass.foxSpeedOnMap, topSqPosition, 86, 70);
        mass.foxSpeedOnMap = mass.foxSpeedOnMap - 15;
        mass.stepFox = mass.stepFox + 68.75;
        if (mass.stepFox >= 540) {
          mass.stepFox = 0;
        }
        //обновляем подсчет очков
        context.font = "30px Luckiest Guy";
        context.fillStyle = "black"
        if (canvas.style.display != "block") { } //если cavas выключен, подсчет не вести
        else {
          hash.score = hash.score + 1;
        }
        context.fillText("Score:" + hash.score, 10, 50);
        //если белка зашла за границу, заканчиваем игру
        if (mass.foxSpeedOnMap < 2) {
          hash.stopGame = true;
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
        context.drawImage(fox, mass.stepFox, 65, 66, 50, mass.foxSpeedOnMap - 20, topSqPosition, 86, 70)
        mass.foxSpeedOnMap = mass.foxSpeedOnMap + 15;
        mass.stepFox = mass.stepFox + 67.7;
        if (mass.stepFox >= 540) {
          mass.stepFox = 0;
        }
        //обновляем подсчет очков
        context.font = "30px Luckiest Guy";
        context.fillStyle = "black"
        if (canvas.style.display != "block") { } //если cavas выключен, подсчет не вести
        else {
          hash.score = hash.score + 1;
        }
        context.fillText("Score:" + hash.score, 10, 50);


        //если белка зашла за границу, заканчиваем игру
        if (mass.foxSpeedOnMap < 2) {
          hash.stopGame = true;
        }
      }


      //вверх
      if (mass.foxSpeed == 3) {
        //включаем звук джетпака
       jetpack= document.getElementById("jetpack");
        jetpack.play();
        context.clearRect(0, 0, canvas.width, canvas.height);
        hash.PosXSq = hash.PosXSq - hash.speedBg;
        // движение земли 
        context.drawImage(bg, hash.PosXSq, canvas.height - bg.height);
        context.drawImage(bg, hash.PosXSq + bg.width, canvas.height - bg.height);
        context.drawImage(bg, hash.PosXSq + bg.width + bg.width, canvas.height - bg.height);
        if (hash.PosXSq < (-bg.width)) {
          hash.PosXSq = 0;
        }
        //обновляем подсчет очков
        context.font = "30px Luckiest Guy";
        context.fillStyle = "black"
        if (canvas.style.display != "block") { }
        else {
          hash.score = hash.score + 1;
        }
        context.fillText("Score:" + hash.score, 10, 50);
        //обновляем белку
        context.drawImage(fox, 265, 130, 40, 80, mass.foxSpeedOnMap, hash.poxYJumbSq, 60, 100);
        if (hash.poxYJumbSq == 0) {
          hash.poxYJumbSq = canvas.height - bg.height + bg.height / 2.6;
        }
        else {
          hash.poxYJumbSq = hash.poxYJumbSq - 5;
          mass.foxSpeedOnMap = mass.foxSpeedOnMap + 1;
        }
        //если белка зашла за границу, заканчиваем игру
        if (mass.foxSpeedOnMap < 2) {
          hash.stopGame = true;
        }
      }



      //после прыжка возвращаемся вниз
      if (mass.foxSpeed == 4) {
        jetpack= document.getElementById("jetpack");
        jetpack.pause();
        context.clearRect(0, 0, canvas.width, canvas.height);
        hash.PosXSq = hash.PosXSq - hash.speedBg;
        // движение земли 
        context.drawImage(bg, hash.PosXSq, canvas.height - bg.height);
        context.drawImage(bg, hash.PosXSq + bg.width, canvas.height - bg.height);
        context.drawImage(bg, hash.PosXSq + bg.width + bg.width, canvas.height - bg.height);
        if (hash.PosXSq < (-bg.width)) {
          hash.PosXSq = 0;
        }
        //обновляем подсчет очков
        context.font = "30px Luckiest Guy";
        context.fillStyle = "black"
        if (canvas.style.display != "block") { }
        else {
          hash.score = hash.score + 1;
        }
        context.fillText("Score:" + hash.score, 10, 50);
        //обновляем белку
        context.drawImage(fox, 265, 130, 40, 80, mass.foxSpeedOnMap, hash.poxYJumbSq, 60, 100);
        if (hash.poxYJumbSq == 0) {
          hash.poxYJumbSq = canvas.height - bg.height + bg.height / 2.6;
        }
        //если белка достигла земли
        else if (hash.poxYJumbSq >= canvas.height - bg.height + bg.height / 2.6) {
          context.clearRect(0, 0, canvas.width, canvas.height);

          // движение земли 
          context.drawImage(bg, hash.PosXSq, canvas.height - bg.height);
          context.drawImage(bg, hash.PosXSq + bg.width, canvas.height - bg.height);
          context.drawImage(bg, hash.PosXSq + bg.width + bg.width, canvas.height - bg.height);
          if (hash.PosXSq < (-bg.width)) {
            hash.PosXSq = 0;
          }
          //обновляем подсчет очков
          context.font = "30px Luckiest Guy";
          context.fillStyle = "black"
          if (canvas.style.display != "block") { }
          else {
            hash.score = hash.score + 1;
          }
          context.fillText("Score:" + hash.score, 10, 50);

          context.drawImage(fox, 0, 0, 40, 55, mass.foxSpeedOnMap, topSqPosition, 60, 80);
          mass.foxSpeed=0;
          var soundJump= document.getElementById("JumpSound");
          soundJump.play();
        }
        else {
          hash.poxYJumbSq = hash.poxYJumbSq + 5;
          mass.foxSpeedOnMap = mass.foxSpeedOnMap + 1;
        }
        //если белка зашла за границу, заканчиваем игру
        if (mass.foxSpeedOnMap < 2) {
          hash.stopGame = true;
        }

      }



      //анимация ловушек


      var PipeUpY = 0; //Высота верхнего блока

      for (var i = 0; i < pipeBlock.length; i++) {

        //обновляем препятсвия 
        context.drawImage(pipe, pipeBlock[i].x - pipeBlock[i].y + 500, canvas.height - bg.height + bg.height / 2.2);
        // соотношаем с экранов
        //если тач поддерживается, меняем соотношение
        if ( ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ){
        hash.posPipe = hash.posPipe - hash.speedBg;
        if (canvas.width < 500) {
          PipeUpY = -430;
          context.drawImage(pipeUp, pipeBlock[i].x, PipeUpY);
        }
        else if (canvas.width <= 812 || canvas.height <= 375) {
          PipeUpY = -830;
          context.drawImage(pipeUp, pipeBlock[i].x, PipeUpY);
        }
      }
        else { //соотношение на десктопе
          PipeUpY = -250;
          context.drawImage(pipeUp, pipeBlock[i].x, PipeUpY);
        }
        pipeBlock[i].x = pipeBlock[i].x - 1;
        if (pipeBlock[i].x == 990) {
          pipeBlock.push({
            x: 1920,
            y: Math.floor(Math.random() * (900 - 300)),
          })
        }
        //условия попадание белки в ловушки
        if (mass.foxSpeedOnMap >= pipeBlock[i].x - pipeBlock[i].y - 60 &&
          mass.foxSpeedOnMap >= pipeBlock[i].x - pipeBlock[i].y + pipe.width &&
          topSqPosition <= PipeUpY + pipeUp.height - 80 || mass.foxSpeedOnMap == pipeBlock[i].x - pipeBlock[i].y) {
            if (hash.score <= 100) {
              mass.foxSpeedOnMap = 400;
            }
            else{
              hash.stopGame=true;
            }
        }
      }

    }

  }
  //елси игра закончена, то выводим табло
  else {
    
    if (canvas.width < 512) {
      if(hash.vibroPhone==0){
      navigator.vibrate(1000);
      hash.vibroPhone=1;
      records();
    }
      var table = document.getElementById("EndGameTable");
      table.style.display = "block";
      //table.style.background = "url('img/EndGameTable.gif')";
      // table.style.width = "300px";
      // table.style.height = "350px";
      table.style.position = "absolute";
      table.style.backgroundSize = "cover";
      table.style.margin = "auto";
      table.style.marginTop = "50px";
      table.style.left = 0 + "px";
      table.style.right = 0 + "px";
      var resultScore = document.getElementById("resultScore");
      resultScore.innerHTML = "result:" + hash.score;
      
    }
    else {
      if(hash.vibroPhone==0){
      navigator.vibrate(500);
      hash.vibroPhone=1;
      records();
      }
      var table = document.getElementById("EndGameTable");
      table.style.display = "block";
      // table.style.background = "url('img/EndGameTable.gif')";
      // table.style.width = "400px";
      // table.style.height = "450px";
      table.style.position = "absolute";
      table.style.backgroundSize = "cover";
      table.style.margin = "auto";
      table.style.marginTop = "50px";
      table.style.left = 0 + "px";
      table.style.right = 0 + "px";
      var resultScore = document.getElementById("resultScore");
      resultScore.innerHTML = "result:" + hash.score;
      
    }
      //защита от выхода 
    if (hash.score!=0){
      window.onbeforeunload = function() {
        return "Данные не сохранены. Точно перейти?";
      };
            
    }
  }
  requestAnimationFrame(Animation);
}
// начать игру при нажатии клавиши играть снова
function ContinueGame() {
  hash.vibroPhone=0;
  var table = document.getElementById("EndGameTable");
  table.style.display = "none";
  mass.foxSpeedOnMap = 400;
  hash.stopGame = false;
  hash.score = 0;
}






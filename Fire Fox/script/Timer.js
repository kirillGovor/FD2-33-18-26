if ( !window.requestAnimationFrame ) {

    window.requestAnimationFrame = ( function() {
  
      return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
  
        window.setTimeout( callback, 1000 / 60 );
  
      };
  
    })();
  }
  var hash={
    cloudSpeed : 2, //скорость облочков
    cloudstep :0, //счетчик облочка
    CloudWay : 400, // длинна пути облочка
    speedY : 5,
    width : 50,
    height: 50,
    OnePlayer:0,
    TwoPlayer:0,
    OneSpeed:0,
    TwoSpeed:0,
    stopBall:0,
    OnePlayerGol:0,
    TwoPlayerGol:0,
}

function cloudAnimation(){
    var cloud = document.getElementById("cloud");
    var cloud_left; //счетчик, который будет сдивагить облочки
    var fon = document.getElementById("fon");
    var fonWidth=fon.style.width;
  // if(fonWidth<=500){
    // hash.CloudWay=20;
   //}
    
      cloud_left=Number(cloud.style.marginLeft.replace(/[^-0-9]/gim,''));// положение блоков в y , тк они с окончанием px, берем только числа
      
      if (cloud_left==0||cloud_left<=hash.CloudWay && hash.cloudstep ==0){ // если облочко слишком далеко,, то его не сдивгаем
        cloud.style.marginLeft=cloud_left+hash.cloudSpeed+"px";// сдиваем облочко на 2 px
      }
      else{
        cloud.style.marginLeft=cloud_left-hash.cloudSpeed+"px";
        hash.cloudstep =1
        if (cloud_left<=2){
          hash.cloudstep =0;
        }
        
      }
    
        
       
      
    requestAnimationFrame(cloudAnimation);

}

function tick(){ //таймер

}







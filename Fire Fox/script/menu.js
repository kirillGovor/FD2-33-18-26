var Menu={
    soundClick : 0, //скорость облочков
    musicClick :0, //счетчик облочка
}
function elementMenu(){ //добовляем все компоненты на страницу
   var body=document.getElementsByTagName("body")
   document.body.innerHTML="<div id=ImportantMenuDiv class=fon><h1 class=menu><span>fire</span> fox</h1><div class=menu_div ><ul id=mainMenu class=OptionsGame><li><a class=link onclick=startGame()  >start game</a></li><li><a class=link onclick=optionsGame() >options</a></li><li><a class=link onclick=closeGame() >exit game</a></li></ul><ul><li><a class=link onclick=music() >music</a></li> </ul></div></div>";
    
}


function startGame(){ //скрыть менюху при нажатии кнопки старт
   
    var menu_block =document.getElementById("mainMenu");
    var menu_name = document.getElementById("NameMenu");
    menu_block.style.display="none";
    menu_name.style.display="block"; 
}
function NameBack(){
    var menu_block =document.getElementById("mainMenu");
    var menu_name = document.getElementById("NameMenu");
    menu_block.style.display="block";
    menu_name.style.display="none";
}

function TrueName(){
    var textName=document.getElementById("text_name");
    var Nick= document.getElementById("Nick");
    var canvas=document.getElementById("canvas");
    var MainMenuBlock =document.getElementById("ImportantMenuDiv");
    if (Nick.value==""||Nick.value==undefined){
        Nick.style.background="#ff4949";
        Nick.style.color="orange";
    }
    else{
       var ImportantMenuDiv=document.getElementById("ImportantMenuDiv");
       ImportantMenuDiv.style.display="none";
       canvas.style.display="block";
       var newBg =document.getElementById("fon");
       newBg.style.backgroundImage="url('img/fon2.jpg')";
    }
}

function optionsGame(){ //скрывает тескт при нажатии настроек
    var menu_block =document.getElementById("mainMenu");
    var option_menu= document.getElementById("optionMenu");
  if (menu_block.style.display=="block"||menu_block.style.display==""){
    menu_block.style.display="none";
    option_menu.style.display="block"
  }
  else{
    
    menu_block.style.visibility="hidden";
    }
}

function closeGame(){
    var result = confirm("Вы действительно хотите закрыть игру?");
    if (result==true)
    window.close();
}

function optionmenuMusic(){
    var music=document.getElementById("music_link");
    var fonMusic=document.getElementById("fonMusic");
    if(music.innerHTML=="music: on"){
    music.innerHTML="music: off"
    fonMusic.volume="0";
    }
    else{
    music.innerHTML="music: on"
    fonMusic.volume="1";
    }
    
}

function optionmenuSounds(){
    var sounds=document.getElementById("sound_link");
    if(sounds.innerHTML=="sounds: on"){
        sounds.innerHTML="sounds: off"
        Menu.soundClick=1;
    }
    else{
        sounds.innerHTML="sounds: on";
        Menu.soundClick=0;
    }
    
}
function optionmenuBack(){
    var menu_block =document.getElementById("mainMenu");
    var option_menu= document.getElementById("optionMenu");
    menu_block.style.display="block";
    option_menu.style.display="none";
}

document.onmousedown = function() {
    if (Menu.soundClick==1){}
    else{
        var soundClick= document.getElementById('soundClick');
        soundClick.play();
    }
}















///Убрать выделение тексат мышкой (НА половину работает :)

function preventSelection(element){
    var preventSelection = false;
  
    function addHandler(element, event, handler){
      if (element.attachEvent) 
        element.attachEvent('on' + event, handler);
      else 
        if (element.addEventListener) 
          element.addEventListener(event, handler, false);
    }
    function removeSelection(){
      if (window.getSelection) { window.getSelection().removeAllRanges(); }
      else if (document.selection && document.selection.clear)
        document.selection.clear();
    }
    function killCtrlA(event){
      var event = event || window.event;
      var sender = event.target || event.srcElement;
  
      if (sender.tagName.match(/INPUT|TEXTAREA/i))
        return;
  
      var key = event.keyCode || event.which;
      if (event.ctrlKey && key == 'A'.charCodeAt(0))  // 'A'.charCodeAt(0) можно заменить на 65
      {
        removeSelection();
  
        if (event.preventDefault) 
          event.preventDefault();
        else
          event.returnValue = false;
      }
    }
    // не даем выделять текст мышкой
    addHandler(element, 'mousemove', function(){
      if(preventSelection)
        removeSelection();
    });
    addHandler(element, 'mousedown', function(event){
      var event = event || window.event;
      var sender = event.target || event.srcElement;
      preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
    });
  
    // борем dblclick
    // если вешать функцию не на событие dblclick, можно избежать
    // временное выделение текста в некоторых браузерах
    addHandler(element, 'mouseup', function(){
      if (preventSelection)
        removeSelection();
      preventSelection = false;
    });
  
    // борем ctrl+A
    // скорей всего это и не надо, к тому же есть подозрение
    // что в случае все же такой необходимости функцию нужно 
    // вешать один раз и на document, а не на элемент
    addHandler(element, 'keydown', killCtrlA);
    addHandler(element, 'keyup', killCtrlA);
  }
  preventSelection(document);
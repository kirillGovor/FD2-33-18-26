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
    var MainMenuBlock =document.getElementById("ImportantMenuDiv");
    if (Nick.value==""||Nick.value==undefined){
        Nick.style.background="#ff4949";
        Nick.style.color="orange";
    }
    else{
       var ImportantMenuDiv=document.getElementById("ImportantMenuDiv");
       ImportantMenuDiv.style.display="none";
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
    if(music.innerHTML=="music: on"){
    music.innerHTML="music: off"
    }
    else{
    music.innerHTML="music: on"
    }
    
}

function optionmenuSounds(){
    var sounds=document.getElementById("sound_link");
    if(sounds.innerHTML=="sounds: on"){
        sounds.innerHTML="sounds: off"
    }
    else{
        sounds.innerHTML="sounds: on"
    }
    
}
function optionmenuBack(){
    var menu_block =document.getElementById("mainMenu");
    var option_menu= document.getElementById("optionMenu");
    menu_block.style.display="block";
    option_menu.style.display="none";
}

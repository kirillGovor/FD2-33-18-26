function elementMenu(){
   var body=document.getElementsByTagName("body")
   document.body.innerHTML="<div id=ImportantMenuDiv class=fon><h1 class=menu><span>fire</span> fox</h1><div class=menu_div ><ul id=mainMenu class=OptionsGame><li><a class=link onclick=startGame()  >start game</a></li><li><a class=link onclick=optionsGame() >options</a></li><li><a class=link onclick=closeGame() >exit game</a></li></ul><ul><li><a class=link onclick=music() >music</a></li> </ul></div></div>";
}


function startGame(){
    var menu_block =document.getElementById("ImportantMenuDiv");
    
        menu_block.style.visibility="hidden";
    
}

function optionsGame(){
    var menu_block =document.getElementById("mainMenu");
  if (menu_block.style.visibility=="hidden"){
    menu_block.style.visibility="visible";
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
    
}
var noOfButtons = document.querySelectorAll(".drum").length;
for (var i=0 ; i<noOfButtons ;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


function handleClick(){
  var buttonInn = this.innerHTML;
  makeSound(buttonInn);
  buttonAnima(buttonInn);
}

//aud = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3"]
//var audio = new Audio("sounds/tom-2.mp3");
//audio.play();

document.addEventListener("keydown",press);
function press(){
  makeSound(event.key);
  buttonAnima(event.key);
}

function makeSound(key){
  switch (key) {
    case "w":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;
  case "a":
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
  case "s":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;
  case "d":
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;
  case "j":
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;
  case "k":
  var kick = new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;
  case "l":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;
    default:console.log(buttonInn);

  }

}

function buttonAnima(currentKey){
  var anima =  document.querySelector("."+currentKey);
  anima.classList.add("pressed");
  setTimeout(function(){
    anima.classList.remove("pressed")
  },100);
}

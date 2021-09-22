//document.querySelectorAll("button")[0].addEventListener("click",handleClick);

var i;
var numOfDrum = document.querySelectorAll(".drum").length;
//for(i=0;i<7;i++)  document.querySelectorAll("button")[i].addEventListener("click",handleClick);
for(i = 0 ; i < numOfDrum ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    handleClick(buttonInnerHTML);
    addButtonAnimation(buttonInnerHTML);
  });

}

document.addEventListener("keydown",function(event){
  handleClick(event.key);
  addButtonAnimation(event.key);
  //alert(event);
});

function handleClick(key){
  //alert("Did you just click me?😶");
  // var audio = new Audio("sounds/crash.mp3");
  // audio.play();
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      alert(button)
  }
}

function addButtonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

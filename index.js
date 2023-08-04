var buttons = document.querySelectorAll(".drum");
var classes = ["w", "a", "s", "d", "j", "k", "l"];
for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click",handleClick);
}

function handleClick() {
    //capturing the button that got pressed
    var currentBtn = this.id;
    playAudio(currentBtn);
    addAnimation(currentBtn);
}

// KEYBOARD HANDLER

document.addEventListener("keypress", handleKey.bind(this.key));

function handleKey(event){
    playAudio(event.key);
    addAnimation(event.key);
    console.log(event);

}

function playAudio(inst){
    
    
    switch (inst){
        case "w" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a" :
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default :
         console.log(inst);
         break;
    } 

}

function addAnimation(className){
    var activeBtn = document.querySelector("."+className);
    activeBtn.classList.add("btn-w");
    activeBtn.classList.add("pressed");

    setTimeout( function(){
        activeBtn.classList.remove("btn-w");
        activeBtn.classList.remove("pressed");
    }
        , 200);

}
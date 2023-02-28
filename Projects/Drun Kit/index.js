// For Event Listener Documentation Visit (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
//Placing Event Listener to all the drums
//when button is clicked
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //what to do when click detected
        // this.style.color="white";  //if you want to change the text color when user clicks the button
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        
    });
}
//If you want that the entire document should listem to your keyboard then use
// document.addEventListener("keydown",function(event){
//     console.log(event); //event contains the properties why it happended or what caused it to happen
// })
//when it is clicked using the keyboard
document.addEventListener("keydown",function(event){
    makeSound(event.key);
})
function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3"); //created the object of Audio class
            tom1.play();  //called the method play on object from Audio class
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/tom-4.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML)
    }
    
}

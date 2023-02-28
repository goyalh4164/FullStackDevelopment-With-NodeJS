// For Event Listener Documentation Visit (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
//Placing Event Listener to all the drums
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("I got clicked");
        //what to do when click detected
    });
}

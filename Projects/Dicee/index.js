var randomNumber1=Math.floor(Math.random()*6+1)
var randomDiceImage="dice" + randomNumber1 +".png";  //selecting random image
var randomImageSource="images/"+randomDiceImage;  //storing the source of random image

var image1=document.querySelectorAll("img")[0];   
image1.setAttribute("src",randomImageSource);    //setting the source

var randomNumber2=Math.floor(Math.random()*6+1);
var randomDiceImage2="dice" + randomNumber2 +".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1]; 
image2.setAttribute("src",randomImageSource2);
//changing the heading to show who won or game gone in tie state
if(randomNumber1>randomNumber2){
    var heading=document.querySelector("h1");
    heading.innerText="Player 1 Won!!";
}
else if(randomNumber1<randomNumber2){
    var heading=document.querySelector("h1");
    heading.innerText="Player 2 Won!!";
}
else{
    var heading=document.querySelector("h1");
    heading.innerText="Tie 🔥";
}
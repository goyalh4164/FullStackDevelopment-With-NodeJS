//when our jQuery is loaded completly then only it executes the Jquery statement written inside the JS file
// $(document).ready(function(){
//     $("h1").css("color","red");
// })
$("h1").css("color","red");
//if you want to console font-size or any other property then you can do in this manner
console.log($("h1").css("font-weight"));
// $("button").css("color","white")  //it will select all the buttons on the webpage and applies the css to all the buttons
//adding class to our elements
$("h1").addClass("big-title");
// To remove the class 
$("h1").removeClass("big-title");
//To add multiple classes
$("h1").addClass("big-title margin-50")
//To know whether that element contains that class or not use this
$("h1").hasClass("margin-50")  // --> it will return the boolean value
//To change the Text
$("h1").text("Bye")
//adding inner html
$("button").html("<em> Hello <em>")
//Manipulating Attributes using jQuery
console.log($("img").attr("src"))
//Manipulating Anchor Tag
$("a").attr("href","https://www.yahoo.com/");
//class is also kind of attribute 
console.log($("h1").attr("class"))
//adding event Listener 
$("h1").click(function(){
    $("h1").css("color","purple");
})
//adding event listener to our buttons
$("button").click(function(){
    $("h1").css("color","green");
})
//detecting key press in input box 
$("input").keydown(function(event){
    $("h1").text(event.key)
})
//Another way of adding event Listener by using the "on" keyword
$("h1").on("mouseover",function(){
    $("h1").css("color","blue")
})
//Use of Before keyword and After keyword prepend and append
$("h1").before('<button>New Button</button>')








//when you actually add parenthesis then you are actually calling the function else you are just passing it or getting details about it
exports.getDate = function(){
    var today=new Date();
    var options={
        weekday : "long",
        day:"numeric",
        month:"long"
    };
    return today.toLocaleDateString("en-US",options);
}
exports.getDay= function (){
    var today=new Date();
    var options={
        weekday : "long",
    };
    return today.toLocaleDateString("en-US",options);
}
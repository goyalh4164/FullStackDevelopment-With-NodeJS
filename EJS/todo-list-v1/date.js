
module.exports.getDate =getDate;
//when you actually add parenthesis then you are actually calling the function else you are just passing it or getting details about it
function getDate(){
    var today=new Date();
    var options={
        weekday : "long",
        day:"numeric",
        month:"long"
    };
    return today.toLocaleDateString("en-US",options);
}
module.exports.getDay=getDay;
function getDay(){
    var today=new Date();
    var options={
        weekday : "long",
    };
    return today.toLocaleDateString("en-US",options);
}
// He said,"This is awesome"
// how to write the above statement
//one way
let s1='He said, "This is awesome"';
// second way using escape characters
let s2="He said, \"This is awesome\"";
console.log(s1);
console.log(s2);
//if you want single quotes
let s3="He said, 'This is awesome'";
console.log(s3);
// one more by using back ticks

let s4=`He said, 'This is awesome'`;
console.log(s4);
//string in multiple lines
let s5="This string in\n multiple lines";
console.log(s5);
// One more way using backticks for multiple lines
let s6=`This string 
in multiple lines`;
//concanate the string
let n='john';
let g1='Good morning ' + n
console.log(g1);
// you can do above by using dollar sign also
// Basically you can write any valid JS inside the dollar sing
// use dollar sign generally with back ticks only
let g2=`Good Morning ${n}`
// one more example of dollar
let s7=`10 +2 = ${10+2}`;
console.log(s7);
// Dollar works only with backticks


/* Hoisting:- javascript default behavious where all the declaration
move to the top of thiere scope */

// console.log(a);

// var a = 10;

// fun();

// function fun(){
//     console.log("hello world");  
// }


// Question
var a = 10;
function fun(){
    console.log(a);
    var a = 20;
}

fun();
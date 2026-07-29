var a = 10;
let b = 20;

{
    let b = 30;
    var a = 40;
    console.log(a,b);
}

console.log(a,b);


var a = 10;
var c = 60;
function fun(){
    let b = 10;
    var a = 50;
    a++;
    console.log(a);
    console.log(b);
    console.log(c);
}

// console.log(a,b,c);
console.log(a,c);
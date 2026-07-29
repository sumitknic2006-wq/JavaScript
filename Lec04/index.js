/* Undefined , Null :-
Undefined : -  variable is declared but  value is not provided or not initialized 
--> undefined ka typeof undefined hota hai.*/

var a;
let b;

console.log(a);
console.log(b);
console.log(c);

function fun(){ // agar var function ke ander hai to uska scope functional hoga.
    var c = 10;
}

{
    var c = 10;   // var block scope ko ijat nahi deta hai
}
// fun()
console.log(c);


/* Null:- variable is declare but usko ek empty dete hai.
--> null ka data typeof object hota hai */

var d = null;

function sum(a,b){
    console.log(typeof b);
    return a+b;
}

console.log(sum(10,20)); 

console.log(typeof null);

/* Not Defined:- variable not declaire lekin hum usko use kar rhe hai to is case me not define aata hai. */
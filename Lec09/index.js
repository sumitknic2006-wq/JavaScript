// there is not return type 

function function_Name(){
    console.log("some work");
    return 5;
}

// function_Name();

let result = function_Name();

console.log(result);

let x = result + "54";
console.log(x);


/**
 * Explicit Number typecast using +/-
*/

console.log(+"6" + "55") // 655
console.log(-"6" + 55) // 49
console.log(55 + +[1] + "6") // 566


// how to pass parameter

function add(a,b){
    console.log(a,b);
    return a+b; // undefined + undefined = NaN
}

let out = add(5,2);
let out1 = add();
console.log(out);
console.log(out1);


// default parameter

function add(a = 2,b =3){ // a, b -> 
    console.log(a,b);
    return a+b; 
}

// let out2 = add();
let out2 = add(10,3);
console.log(out2);

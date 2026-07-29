// always non primitive data type primitive me convert ho jata hai.

let num = "10";
let num2 = Number(num);  // Number --> Number("10") --> 10
// if you want to check type of any value => we use type
console.log(typeof num);
console.log(typeof num2);

// logic ==> num ki value bhejoge usme mai 10 increament
// krke return krunga
function increamentBy10(num){

    return Number(num)+10;
}

let result = increamentBy10(num);
console.log(result);

let arr = [];
console.log(Number(arr)); // 0
console.log(Number("")); // 0
console.log(Number("  ")); // 0
console.log(Number("....")); // NaN
console.log(Number({}));
// console.log(Number([1,2]));
console.log(Number([12]));

// string
console.log(String([]));
console.log(String([1,2]));

console.log(Number([1,2]));
console.log(Number("1,2"));

console.log(String({})); // "{}" // object always NaN aata hai.

// agar object ko hum string me convert karte hai to  ->> {object  object}



// expectation- 20



// string --> string(1) ==> "1" || 
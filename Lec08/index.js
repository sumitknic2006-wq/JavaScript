/* == & === :-

# ==:- double equal compare value after typecasting 
--> loose comparision

# === :- compares value without type casting
--> strict comparision
*/


console.log("1" == 1); // true

console.log("a" == 1) // false

console.log("" == 0); // true

console.log("" == "  "); // false

console.log([]==""); // true

console.log(["a"] == "a"); // true

console.log([] == "  "); // false

console.log({} == 0); // false

console.log(undefined == 0); // false

console.log(true == 0); // false

console.log(true == "abc"); // false

console.log("abc" == true); // false

console.log([1] == true); // true

console.log(["1"] == true); // true

console.log([]==[]); // false , object compare to reference ke through

console.log({} == {}); // false

console.log([1,2] == [1,2]); // false

let arr = [1,2,3];

console.log(arr == arr); // true

// primitive data type ==> Non primitive data type




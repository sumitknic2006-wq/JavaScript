var c = 50;
function outer(){
    let a = 10;
    function inner(){
        a++;
        console.log(a);
    }
    // inner();
    return inner;
}

// closure har baar naya banta hai
let f1 = outer();
let f2 = outer();
console.log(f1);

f1(); // inner();
f2();
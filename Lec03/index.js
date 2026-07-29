var a = 10;
var z = 20;
let m = 60;
function isAllowed(){
    var age = 18;
    let m = 30;
    if(age>=18){
        let age = 20;
        var a = 50;
        console.log("allowed");
    }
    function innerFunction(){
        var age = 50;
        console.log(z); // 20
        console.log(age); // 50
        console.log(m); // 30
        console.log(a); // 10
    }
    console.log(a);
    innerFunction();
}

isAllowed();
console.log(a,m,z) // 10 , 60 , 20
console.log(age) // 
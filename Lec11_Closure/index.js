// var roll = null;

// function changeRoll(roll_Num){
//     roll = roll_Num;
// }

// console.log(roll);
// changeRoll(25);
// roll = 65;
// console.log(roll);

// uper wala wrong code hai


function increamentAttendance(){
    let attendance = 0;
    function change(){
        attendance++;
        console.log(attendance);
    }
   return change; 
}

let StudentOneincreament = increamentAttendance();
StudentOneincreament();
StudentOneincreament();

let StudentTwoincreament = increamentAttendance();
StudentTwoincreament();
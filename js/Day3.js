console.log(Math.min(10,3,5,7,88,7))//compare minimum number



console.log(Math.max(10,3,5,7,88,7))



console.log(Math.random())
console.log(Math.random())//it doesn't take whole number



console.log(Math.random()*10) // it takes float value below 10



console.log(Math.floor(Math.random()*10)) //it changes float value to int value




// prints 1 to 10 not print 0.
console.log(Math.floor(Math.random()*10)+1) //it changes float value to int value


//math javascript mdn [refer this website...]



//=====================================================================



console.log("1","Jevajni")

const a="Jevajni"
console.log("first",a[Math.floor(Math.random()*a.length)]);


const b='ruban Jeeva'
console.log('word',b.split(" ",[Math.floor(Math.random()*b.length)]));

const c="Jevajnikghj"
console.log("second",c[Math.floor(Math.random()*a.length)]);


console.log("third","kjghdhdjf".charAt(Math.floor(Math.random()*11)));

console.log("fourth",b.charAt(Math.floor(Math.random()*b.length)));



//======================================================================================


/////..........If statement syntax  ..............

// if (condition) {
//     //run code
// }
// else {
//     //run different code.
// }



let viewer = "dhuttu JS full course";
let reply;
if (viewer) {
    reply = `Enjoy`
}
console.log(reply)

//....................................


let viewers = "dhuttu JS full course";
let replys;
if (viewers) {
    replys = `Enjoy ${viewers}`;
}
console.log(replys);


//....................................

let viewer1 = "dhuttu JS full course";
let reply1;
if (viewer1) {
    reply1 = `Enjoy ${viewer1}`;
}
else {
    reply1 = 'sorry I am Still working.';
}
console.log(reply1);

//....................................


let viewer2;
let reply2;
if (viewer2) {
    reply1 = `Enjoy ${viewer2}`;
}
else {
    reply2 = 'sorry I am Still working.';
}
console.log(reply2);


//....................................


let customerIsBanned = true;
let viewer3;
let reply3;
if(customerIsBanned){
    reply3='byee';
}
else if (viewer3) {
    reply3 = `Enjoy ${viewer3}`;
}
else {
    reply3 = 'sorry I am Still working.';
}
console.log(reply3);


//....................................


let customerIsBanned1 = false;
let viewer4='our video';
let reply4;
let finance = true;
if(customerIsBanned1){
    reply4='byee';
}
else if (viewer4 && finance) {
    reply4 = `Enjoy ${viewer4}`;
}
else if (viewer4) {
    reply4 = `Enjoy ${viewer4}`;
}
else {
    reply4 = 'sorry I am Still working.';
}
console.log(reply4);


//....................................

// it will be print this =sorry I am Still working

// let customerIsBanned1 = false;
// let viewer4='';
// let reply4;
// let reply3;
// let finance = false;
// if(customerIsBanned1){
//     reply4='byee';
// }
// else if (viewer4 && finance) {
//     reply4 = `Enjoy ${viewer4}`;
// }
// else if (viewer4) {
//     reply3 = `Enjoy ${viewer4}`;
// }
// else {
//     reply4 = 'sorry I am Still working.';
// }
// console.log(reply4);

//....................................


let testScore = 55;
let grade;
let collegeStudent=true;
if(testScore>=90){
    grade='A';
} else if (testScore>=80) {
    grade='B';
} else if (testScore>=70){
    grade ='C';
} else if(testScore>=60){
    grade='D';
}
else{
    if (collegeStudent){
        grade='RA';
    }else{
        grade = 'F';
    }
}
console.log(grade);


//===================================================================





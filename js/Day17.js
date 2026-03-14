
//======18-07-2024===============

//============ 7:15 to 7:26======   JSON = Javascript Object Notation =============

// text format
// to send and receive data in many programming languages



const myObj = {
    name:"Dhuddu",
    content: ["Earn","Grow","Give"],
    sub: function(){
        console.log("Thnaks for clicking bell icon");
    }
}

console.log(myObj);
console.log(myObj.content);
console.log(myObj.sub());

const sendJson = JSON.stringify(myObj);  //convert into string format.
console.log(sendJson);

console.log(sendJson.name); //undefined
console.log(typeof myObj);
console.log(typeof sendJson);

const receiveJson = JSON.parse(sendJson); // convert into object format.
console.log(receiveJson);
console.log(typeof receiveJson);
console.log(receiveJson.name);
console.log(receiveJson.content);
console.log(receiveJson.sub()); //we could not acces fuction inside JSON











































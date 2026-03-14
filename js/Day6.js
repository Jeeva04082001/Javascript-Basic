
//...................Loops.............

//While loop

// console.log(1);

//==========================================

// let i=0;
// while(i<=50){
//     console.log(i);
//     i=i+1;
// }

//==========================================


// let i=1;
// while(i<=50){
//     console.log(i);  //don't do this
    
// }


//==========================================

// let i=50;
// do {
//     console.log(i);  //if you want to run the code atleast only once, then use this
//     i=i+10;
// } while(i<50)


//==========================================

for(i=0; i<50; i++)
{
    console.log(i);
}




//==========================================

// let =1;
// for(i<=10; i++){
//     console.log(i);  //Don't Do like this.....
// }



// //==========================================
// let name="jeeva";
// for(let i=0; i<=name.length; i++)
// {
//     console.log(name.charAt(i));
// }


//==========================================



// let name="jeeva";
// for(let i=0; i<=name.length; i+=2)
// {
//     console.log(name.charAt(i));
// }



//==============================================



// let name="j";
// for(let i=0; i<=name.length; i++)
// {
//     for(let j=0; j<=name.length; j++)
//     {
//         console.log(i,j);

//     }
// }



//==============================================

let i=0;
while(i < 6){
    if(i === 3){
        break;
    }
    i = i+1;
}

console.log(i);




//==============================================



// let j=0;
// while(j < 6){
//     if(j === 4){
//         continue;
//     }
//     j = j+1;
// }

// console.log(j);


let text = '';
for (let i=0; i<10; i++){
    if(i==3){
        continue;
    }
    text=text+i;
}
console.log(text);










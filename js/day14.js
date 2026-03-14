// ----------- 15=07-2024


// acope var,let, const


// var x=1;
// var x=2;
// console.log(x);



// let x=1;
// const x=2;
// console.log(x); // already used x then it show error like this

// so dont use var 




// let x=1;
// x=2;
// console.log(x); // value change pannanumna mattum let use pannanum



// const x=1;
// x=2;
// console.log(x); //if using const, we could not value assign again for x


//--------------Global scope-----------


// var x=1;
// let y=2;
// const z=3;



//--------------Local scope-- ---------


// let y=3; // alredy y used above so it occur error


//--------------Local scope--  Block scope---------

// {
//     let y=3;  // now dont occur error
//     console.log(y);
// }




//--------------Local scope--  function scope---------


// function myfunction(){
//     const z=5;
//     console.log(z);
// }

// myfunction()
// console.log(x)  //output 1

// console.log(y) //output 2




// function myfunction(){
//     const z=5;
//     console.log(x);

//     {
//         let y=3;
//         console.log(y);
//     }
// }

// myfunction()


//------------------------

// function myfunction(){
//     const z=5;
//     console.log(x);

//     if(true){
//         let y=3;
//         console.log(y);
//     }
// }

// myfunction()



//------------------------



// var x=1;
// let y=2;
// const z=3;


// console.log(`global: ${x}`);



// function myfunction(){
//     const z=5;
//     console.log(x);

//     if(true){
//         let y=3;
//         console.log(y);
//     }
// }

// myfunction()
// console.log(y);




//Output:-

// global: 1
// 1
// 3
// 2


//------------------------


// var x=1;
// let y=2;
// const z=3;


// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);



// function myfunction(){
//     const z=5;
//     console.log(x);

//     if(true){
//         let y=3;
//         console.log(y);
//     }
// }

// myfunction()
// console.log(y);


// Output:-
// global: 1
// global: 2
// global: 3
// 1
// 3
// 2



//---------------------------------------



// var x=1;
// let y=2;
// const z=3;


// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);



// function myfunction(){
//     const z=5;
//     console.log(`global: ${x}`);
//     console.log(`global: ${y}`);
//     console.log(`global: ${z}`);

//     if(true){
//         let y=3;
//         console.log(y);
//     }
// }

// myfunction()
// console.log(y);





// Output:-

// global: 1
// global: 2
// global: 3
// global: 1
// global: 2
// global: 5
// 3
// 2




//---------------------------------------


// var x=1;
// let y=2;
// const z=3;


// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);



// function myfunction(){
//     // const z=5;
//     console.log(`function: ${x}`);
//     console.log(`function: ${y}`);
//     console.log(`function: ${z}`);

//     if(true){
//         let y=3;
//         console.log(`block: ${x}`);
//         console.log(`block: ${y}`);
//         console.log(`block: ${z}`);
//     }
// }

// myfunction()
// console.log(y);


// Output:-


// global: 1
// global: 2
// global: 3
// function: 1
// function: 2
// function: 3
// block: 1
// block: 3
// block: 3
// 2


//---------------------------------------


// var x=1;
// let y=2;
// const z=3;


// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);



// function myfunction(){
//     const z=5;
    
//     if(true){
//         let y=3;
//         console.log(`block: ${x}`);
//         console.log(`block: ${y}`);
//         console.log(`block: ${z}`);
//     }
//     console.log(`function: ${x}`);
//     console.log(`function: ${y}`);
//     console.log(`function: ${z}`);

// }

// myfunction()
// console.log(y);


// Output:-/

// global: 1
// global: 2
// global: 3
// block: 1
// block: 3
// block: 5
// function: 1
// function: 2
// function: 5
// 2




//---------------------------------------



// var x=1;
// let y=2;
// const z=3;


// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);



// function myfunction(){
//     var z=5;
    
//     if(true){
//         var y=3;
//         console.log(`block: ${x}`);
//         console.log(`block: ${y}`);
//         console.log(`block: ${z}`);
//     }
//     console.log(`function: ${x}`);
//     console.log(`function: ${y}`);
//     console.log(`function: ${z}`);

// }

// myfunction()
// console.log(y);



// Output:-
// global: 1
// global: 2
// global: 3
// block: 1
// block: 3
// block: 5
// function: 1
// function: 3
// function: 5
// 2


//use avoid var inside of function


//---------------------------------------


//=============== Arrays ==============================


// const myArray=[];
// adding element

// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);

// output:-

// [ 'jeeva', 'jeni', true, 3 ]

// console.log('length:-',myArray.length);

// output:-

// length: 4

// console.log("myArray :-",myArray[3]);

// output:-

// myArray :-  3

// console.log("myArray :-",myArray[myArray.length-1]);

// output:-

// myArrayLength :- 3


//---------------------------------------

// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);
// myArray.push("click")
// console.log(myArray);

// output:-


// [ 'jeeva', 'jeni', true, 3 ]
// [ 'jeeva', 'jeni', true, 3, 'click' ]


//---------------------------------------

// myArray=[]

// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// output:-


// [ 'jeeva', 'jeni', true, 3 ]
// [ 'jeeva', 'jeni', true ]


//---------------------------------------


// myArray=[]

// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);
// myArray.unshift("janci")
// console.log(myArray);


// output:-
// [ 'jeeva', 'jeni', true, 3 ]
// [ 'janci', 'jeeva', 'jeni', true, 3 ]

//---------------------------------------

// myArray=[]

// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);
// myArray.shift()
// console.log(myArray);

// output:-

// [ 'jeeva', 'jeni', true, 3 ]
// [ 'jeni', true, 3 ]



// Push = adding element in last of array
//pop = delete element in last of array

//unshift = adding element in first of array

//shift = remove element in first of array



//---------------------------------------

// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);
// const lastItem = myArray.push("jjj")
// console.log(lastItem)


//Output:- 

// [ 'jeeva', 'jeni', true, 3 ]
// 5
//---------------------------------------


// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);
// const lastItem = myArray.push("jjj")
// console.log(lastItem)

// const first = myArray.unshift("jjj")
// console.log(first)


// [ 'jeeva', 'jeni', true, 3 ]
// 5
// 6





// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);
// const lastItem = myArray.push("jjj")
// console.log(lastItem)

// const first = myArray.unshift("jjj")
// console.log(myArray);
// console.log(first)

//Output:-

// [ 'jeeva', 'jeni', true, 3 ]
// 5
// [ 'jjj', 'jeeva', 'jeni', true, 3, 'jjj' ]
// 6






// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);
// const lastItem = myArray.pop()
// console.log(lastItem)

// const first = myArray.shift()
// console.log(myArray);
// console.log(first)

//Output:-

// [ 'jeeva', 'jeni', true, 3 ]
// 3
// [ 'jeni', true ]
// jeeva

//---------------------------------------

 myArray=[]
 myArray[0] = "jeeva"
 myArray[1] = "jeni"
 myArray[2] = true
 myArray[3] = 3
 console.log(myArray);

 delete myArray[2]
 console.log(myArray);

 //Outpput:-
 //[ 'jeeva', 'jeni', true, 3 ]
//[ 'jeeva', 'jeni', <1 empty item>, 3 ]

//---------------------------------------

myArray=[]
myArray[0] = "jeeva"
myArray[1] = "jeni"
myArray[2] = true
myArray[3] = 3
console.log(myArray);

myArray.splice(1,1);
console.log(myArray);
myArray.splice(1,2);
 //Outpput:-

 // starting postion, then how many position delete you want
 [ 'jeeva', 'jeni', true, 3 ] 
[ 'jeeva', true, 3 ]
//---------------------------------------

myArray=[]
myArray[0] = "jeeva"
myArray[1] = "jeni"
myArray[2] = true
myArray[3] = 3
console.log(myArray);

myArray.splice(1,2); // starting postion, then how many position delete you want
console.log(myArray);

 //Outpput:-
 [ 'jeeva', 'jeni', true, 3 ]
 [ 'jeeva', 3 ]
 
//---------------------------------------

myArray=[]
myArray[0] = "jeeva"
myArray[1] = "jeni"
myArray[2] = true
myArray[3] = 3
console.log(myArray);

myArray.splice(1,2,'jeeeeea');
console.log(myArray);

// Output:-

// [ 'jeeva', 'jeni', true, 3 ]
// [ 'jeeva', 'jeeeeea', 3 ]

myArray=[]
myArray[0] = "jeeva"
myArray[1] = "jeni"
myArray[2] = true
myArray[3] = 3
console.log(myArray);

myArray.splice(1,0,'jeeeeea');
console.log(myArray);

// Output:-


// [ 'jeeva', 'jeni', true, 3 ]
// [ 'jeeva', 'jeeeeea', 'jeni', true, 3 ]
//---------------------------------------

myArray=[]
myArray[0] = "jeeva"
myArray[1] = "jeni"
myArray[2] = true
myArray[3] = 3
console.log(myArray);

const newArray = myArray.slice(0,3);
console.log(myArray);
console.log(newArray);

// Output:-

// [ 'jeeva', 'jeni', true, 3 ]
// [ 'jeeva', 'jeni', true, 3 ]
// [ 'jeeva', 'jeni', true ]
//---------------------------------------

// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);

// const newArray = myArray.reverse();
// console.log(myArray);
// console.log(newArray);

// Output:-

// [ 'jeeva', 'jeni', true, 3 ]
// [ 3, true, 'jeni', 'jeeva' ]
// [ 3, true, 'jeni', 'jeeva' ]

//---------------------------------------

// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);

// const newArray = myArray.join();
// console.log(myArray);
// console.log(newArray);

// Output:-

 
// [ 'jeeva', 'jeni', true, 3 ]
// [ 'jeeva', 'jeni', true, 3 ]
// jeeva,jeni,true,3

//---------------------------------------

// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3
// console.log(myArray);

// const newArray = myArray.join();

// console.log(myArray);
// console.log(newArray);

// const neeew = newArray.split(',');
// console.log(neeew)

// Output:-


// [ 'jeeva', 'jeni', true, 3 ]
// [ 'jeeva', 'jeni', true, 3 ]
// jeeva,jeni,true,3
// [ 'jeeva', 'jeni', 'true', '3' ]

//---------------------------------------


// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3

// console.log(myArray);

// myar = [false, 'jjj',77]
// console.log(myar);

// const newArray = myArray.concat(myar);

// console.log(newArray);

// Output:-

// [ 'jeeva', 'jeni', true, 3 ]
// [ false, 'jjj', 77 ]
// [ 'jeeva', 'jeni', true, 3, false, 'jjj', 77 ]


//---------------------------------------

// myArray=[]
// myArray[0] = "jeeva"
// myArray[1] = "jeni"
// myArray[2] = true
// myArray[3] = 3

// console.log(myArray);

// myar = [false, 'jjj',77]
// console.log(myar);

// const newArray = myar.concat(myArray);

// console.log(newArray);
 

// Output:-

// [ 'jeeva', 'jeni', true, 3 ]
// [ false, 'jjj', 77 ]
// [ false, 'jjj', 77, 'jeeva', 'jeni', true, 3 ]


//---------------------------------------

//myArray=[]
//  myArray[0] = "jeeva"
//  myArray[1] = "jeni"
//  myArray[2] = true
//  myArray[3] = 3
 
//  console.log(myArray);

//  myar = [false, 'jjj',77]
//  console.log(myar);
 
//  const newArray = [...myArray,...myar]
 
//  console.log(newArray);
  
// Output:-

// [ 'jeeva', 'jeni', true, 3 ]
// [ false, 'jjj', 77 ]
// [ 'jeeva', 'jeni', true, 3, false, 'jjj', 77 ]

//---------------------------------------
//---------------------------------------
//---------------------------------------
















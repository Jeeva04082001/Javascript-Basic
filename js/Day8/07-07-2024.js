{
    let a=10;

}

console.log(a) // let is local scope

//show error

//------------------------------


{
    var a=10;

}

console.log(a) // Global scope 

// output : 10

//------------------------------

{
    let a=10;
    console.log(a)

}

// output : 10

//------------------------------

const a= 10;
console.log(a)

// output : 10
//------------------------------


const a =10;
a=20;

console.log(a)

//error ------does not assign value again for the variable

//------------------------------------



var a =10;
a=20;

console.log(a)

//output = 20
//------------------------------------

// var (keyword) - function scope or global scope.........


var x=10;
{ var y=20;}
console.log(y);

//output : 20 


//------------------------------------


// let num = 'let keyword'
// let num = '100' 

{
    let c=2;  //Block Scope 
}


//------------------------------------

const num =10
num=20 // cannot change a value


// the const keyword is used to declare a constant
//variable. A constant variable, once assigned a value
// connot ne reassigned or redeclare. it provides a way
// to create variables that are meant to be immutable

//------------------------------------


//Task 1-----------

var price = 100
var product ='headset'
var Tax = 5

console.log(product)
console.log('Total =' ,price+Tax)


//------------------------------------


//Task 2-----------


var FruitName = 'apple'
var count = 5
var price = 100

var total = count*100

console.log('FruitName',FruitName)
console.log('Total Price',total)

//------------------------------------

//----------------OPERATORS------------------

//------Post Increment

var a=10
a++
console.log(a)

//---------Post decrement


var a=10
a--
console.log(a)


//------Pre Increment

var a=10
++a
console.log(a)

//---------Pre decrement


var a=10
--a
console.log(a)



//----------------------------


var a=10
var b=a++
console.log(b)

//output = 10


// a will not meet again a so the value does not increment


//-------------------------------

var a=10
var b=a++
console.log(b)
console.log(a)

//-------------------------------



var a=10
var b=++a
console.log(b)
console.log(a)




//--------------------------

console.log(typeof(10));
console.log(typeof('10'));


//--------------------------

/*

A Javascript function is a block of code
designed to perform a particular task.

A Javascript is executed when "Something"
invokes it( calls it).

*/


//--------------------------


/*
Synatx:

function <function name>(){}

    //--------------//

function hi()
{
console.log('hey there');
}

hi()

*/

//--------------------------


    //-----Function----------

function Samsung()
{
    console.log('jee')
}

Samsung()


//--------------------------

function add(){
    var a=10
    var b=20
    console.log(a+b)
}
add()

//--------------------------


var a=10
var b=20
function add(){
    
    console.log(a+b)
}
add()

//--------------------------

var Actor ='vijay'
var player='kholi'
var movie='3'

function Favourite(){
    console.log('Favourite Actor:',Actor)
    console.log('Favourite player:',player)
    console.log('Favourite movie:',movie)
}

Favourite()


//--------------------------




var Actor ='vijay'
var player='kholi'
var movie='3'

function Favourite(){
    console.log('Favourite Actor:'+Actor)
    console.log('Favourite player:'+player)
    console.log('Favourite movie:'+movie)
}

Favourite()


//--------------------------



function add(a,b)
{
    console.log(a+b)
}
add()

//output:- Nan [ not a number ]

//--------------------------


function add(a,b)
{
    console.log(a+b)
}
add(10,20)


//Output :- 30



//--------------------------


function area(length,breadth)
{
    console.log(length+breadth)
}

area(300,200)

//--------------------------


function area(l,b)
{
    var a= l*b

    console.log('Area is:'+a)
}

var length =10
var breadth=20

area(10,20)



//--------------------------



function myname()
{
    return 'jeeva'
}

var a=myname()
console.log(a)





//--------------------------

function add(a,b){
    return (a+b)
}

var total = add(10,20)
console.log(total)



// ===================IF Else


if(condition){

}else{

}

//-----------------------------------

//========== test: 1

var rain = true
if(rain){
    console.log('take an umbrella')
}
else{
    console.log('enjoy sunshine')
}


//----------------------------------

//========== test: 2

var homework=true

if(homework){
    console.log('great job!');
}
else{
    console.log('finish your homework before playing');
}

//--------------------------------

//========== test: 3


cookies = true
if(cookies){
    console.log('would you like cookie');
}
else{
    console.log('take to bake more ccokies');
}


//--------------------------------

//========== test: 1


var color ='red'
if(color == 'red')
{
    console.log('stop');
}

if(color == 'yellow')
{
    console.log('get ready');
}


if(color == 'green')
{
    console.log('go');
}

//--------------------------------


//========== test: 2


season = 'spring'

if(season == 'spring')
{
    console.log('enjoy blooming flowers');
}


if(season == 'summer')
{
    console.log('Have fun in the sun');
}
    

if(season == 'autumn' || season =='fall')
{
    console.log('Admire the colourful leaves');
}
      

if(season == 'winter')
{
    console.log('bundle up and stay warm');
}




//--------------------------------


//========== test: 3



score = 55

if(score <=50)
{
    console.log('you need to improve');
}
else if(score >=50 && score<=70)
{
    console.log('good job');
}
else{
    console.log('Excellent performance!');
}





//--------------------------------


//========== test: 4


number = 4

if(number%2 == 0)
{
    console.log('number is even');
}
else{
    console.log('number is odd');
}


//--------------------------------


//========== test: 5




names = 'jeeva';

vowel = 'aeiou';

for( let i=0; i<names.length; i++){
    if(vowel.includes(names[i])){
        console.log(names[i]+' is a vowel');
    }else{
        console.log(names[i]+ ' is a consonant');
    }
}





//--------------------------------

for(count=1;count<=5;count++){
    console.log('jeeva');
}



for(count=1;count<=5;count++){
    console.log(count+'jeeva');
}

//--------------------------------



for(n=1;n<=10;n++){
    console.log(n);
}



for(a=10;a>=1;a--){
    console.log(a);
}

//--------------------------------


for(n=1;n<=10;n=n+2){
    console.log(n);
}



//--------------------------------




for(a=1;a<=10;a++){
    console.log(a+'*2='+a*2);
}



//==================DOM Manipulation================================


//What is DOM?

/*
DOM stands for Document Object Model, an interface for web 
documents that represents their structures as a tree-like object.

It allows dynamic manipulation of page content using languages like javascript


*/

//What is DOM manipulation?



/*
DOM Manipulation refers to the process of programmatically 
modifying the content, structure or style of a web pages Document
object model(DOM)using scripting languages like javascript.

Developers can add, remove or modify elements, attributes and text within 
the DOM to create dynamic and interactions, update content dynamically,
and provide a more engaging user experience.

*/

//================================================



































































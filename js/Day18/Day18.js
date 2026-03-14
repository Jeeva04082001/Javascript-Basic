///////////////////////////////////////////////////////////////

//=======================20-07-2024======  Errors and Error Handling ==============================

//=============7:26 to 7:52  =========================

// "use strict";

// variable = "jjjj";
// console.log(variable);  //reference error



//---------------------------------------


// "use strict"; //for errors finding. we shuld be use this.
// const variable = "jjjj";
// console.log(variable);




// Object..create();  //syntax error


//---------------------------------------


// "use strict";
// const variable = "jjjj";
// console.log(variable);


// variable="kkkkkkkk";  //TypeError



//---------------------------------------



// "use strict";

// const makeError = () => {
//     try{
//         const name = "jeeva";
//         name="kkkk";

//     } catch(err){
//         console.log(err);

//     }
// }
// makeError();  // TypeError: Assignment to constant variable.



//---------------------------------------


// "use strict";

// const makeError = () => {
//     try{
//         let name = "jeeva";
//         name="kkkk";

//     } catch(err){
//         console.log(err);

//     }
// }
// makeError();  //no error

//---------------------------------------

// "use strict";

// const makeError = () => {
//     try{
//         const name = "jeeva";
//         name="kkkk";

//     } catch(err){
//         console.error(err);  //used error

//     }
// }
// makeError();


//===== (or)==============

// "use strict";

// const makeError = () => {
//     try{
//         const name = "jeeva";
//         name="kkkk";

//     } catch(err){
//         console.warn(err);  //used warn

//     }
// }
// makeError();

//---------------------------------------


// "use strict";

// const makeError = () => {
//     try{
//         const name = "jeeva";
//         name="kkkk";

//     } catch(err){
//         console.table(err);  //used table

//     }
// }
// makeError();

//---------------------------------------

// "use strict";

// const makeError = () => {
//     try{
//         const name = "jeeva";
//         name="kkkk";

//     } catch(err){
//         console.error(err.stack);  //used stack. we used mostly this.

//     }
// }
// makeError();

//---------------------------------------

// "use strict";

// const makeError = () => {
//     try{
//         const name = "jeeva";
//         name="kkkk";

//     } catch(err){
//         console.error(err.name);  //used name

//     }
// }
// makeError();


//===============================



// "use strict";

// const makeError = () => {
//     try{
//         const name = "jeeva";
//         name="kkkk";

//     } catch(err){
//         console.error(err.stack);  
//         logTheError(err.stack);

//     }
// }
// makeError();


//===============================
// "use strict";

// const makeError = () => {
//     try{
//         throw new customError("this is a custom error");

//     } catch(err){
//         console.error(err.stack);  

//     }
// }
// makeError();



// function customError(message) {
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.message}`;
// }




//===============================

// "use strict";
// const makeError = () => {
//     try{
//         throw new Error("this is a custom error");

//     } catch(err){
//         console.error(err.message);  
//         console.error(err.stack);  
//         console.error(err.name);  

//     }
// }
// makeError();



//===============================

// "use strict";
// const makeError = () => {
//     try{
//         throw new Error("this is a custom error");

//     } catch(err){
//         console.error(err.stack);  

//     } finally {
//         console.log("...finally");
//     }
// }
// makeError();


//===============================



"use strict";
const makeError = () => {
    let i=0;
    while(i<=5){
        try{
            if(i%2 !==0 ){
                throw new Error("odd number");
            }
          console.log("even number");
    
        } catch(err){
            console.error(err.message);  
    
        } finally {
            console.log("...finally");
            i++;
        }
    }
   
}
makeError();



// <!-- 7:53 to 9:04 -->
//index.html , Dom.js and style.css////////// 

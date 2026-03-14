// =================== 6:35 to 7:15 =================

// -----------17-07-2024------------------------

// class Pizza {
//     constructor(typePizza,sizePizza,crustPizza){
//         this.type = typePizza
//         this.size=sizePizza;
//         this.crust=crustPizza;
//         this.toppings = "olives"
//     }
//     bake() {
//         return console.log(`Baking a ${this.type} ${this.crustPizza} crust in ${this.size}pizza with ${this.toppings}`);
//     }
// }

// const anotherPizza = new Pizza("margarita","small","thin");
// anotherPizza.bake();

// const anPizza = new Pizza("pepperonni","medium","thick")
// anPizza.bake();

// const myPizza = new Pizza("margarita","small","thin")
// myPizza.toppings = "sausage"
// myPizza.bake()


//===============================



// class Pizza {
//     constructor(typePizza,sizePizza,crustPizza){
//         this.type = typePizza
//         this.size=sizePizza;
//         this.crust=crustPizza;
//         this.toppings = "olives"
//     }
//     get toppingsPizza(){
//         return this.toppings;
//     }
//     set toppingsPizza(toppingsPizza){
//         this.toppings=toppingsPizza

//     }
//     bake() {
//         return console.log(`Baking a ${this.type} ${this.crustPizza} crust in ${this.size}pizza with ${this.toppings}`);
//     }
// }


// const myPizza = new Pizza("margarita","small","thin")
// myPizza.toppingsPizza = "sausage"
// myPizza.bake()

//===============================



// class Pizza {
//     constructor(typePizza,sizePizza,crustPizza){
//         this.type = typePizza
//         this.size=sizePizza;
//         this.crust=crustPizza;
//         this.toppings = "olives"
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(toppingsPizza){
//         this.toppings=toppingsPizza

//     }
//     bake() {
//         return console.log(`Baking a ${this.type} ${this.crustPizza} crust in ${this.size}pizza with ${this.toppings}`);
//     }
// }


// const myPizza = new Pizza("margarita","small","thin")
// myPizza.setToppings("sausage");
// console.log(myPizza.toppings);
// console.log(myPizza.getToppings());
// myPizza.bake()
// console.log(myPizza.getToppings());

//===============================

// class Pizza {
//     constructor(typePizza,sizePizza,crustPizza){
//         this.type = typePizza
//         this.size=sizePizza;
//         this.crust=crustPizza;
//         this.toppings = [];
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(toppingsPizza){
//         this.toppings.push(toppingsPizza);

//     }
//     bake() {
//         return console.log(`Baking a ${this.type} ${this.crustPizza} crust in ${this.size}pizza with ${this.toppings}`);
//     }
// }


// const myPizza = new Pizza("margarita","small","thin")
// myPizza.setToppings("sausage");
// myPizza.setToppings("Egg");
// console.log(myPizza.toppings);
// console.log(myPizza.getToppings());
// myPizza.bake()
// console.log(myPizza.getToppings());



//===============================

// class Pizza {
//     constructor(sizePizza){
        
//         this.size=sizePizza;
//         this.crust="original";
        
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(crustPizza){
//         this.crust = crustPizza;

//     }
    
// }

// class specialPizza extends Pizza{
//     constructor(sizePizza){
//         super(sizePizza);
//         this.type = "Margarita"
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`);
//     }
// }

// const mySpecialPizza = new specialPizza("medium");
// mySpecialPizza.slice();

//===============================

//-----------Factory Function..................

// function pizzaFactory(sizePizza){
//     const crust = "orignal";
//     const size = sizePizza;

//     return {
//         bake: ()=> console.log(`Baking a ${size} ${crust} crust pizza`)
//     };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();
// console.log(myPizza.crust); //undefined 

//===============================

// class Pizza {
//         crust = "orignal";
//         #sauce = "tomato";
//         constructor(sizePizza){
            
//             this.size=sizePizza;  // _size = _ means private
            
//         }
//         getCrust(){
//             return this.crust;
//         }
//         setCrust(crustPizza){
//             this.crust = crustPizza;
    
//         }

//         bake(){
//             console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} pizza `);
//         }
        
//     }
    
//     const myPizza = new Pizza("small");
//     myPizza.bake()
//     console.log(myPizza.crust);
//     console.log(myPizza.getCrust());
//     console.log(myPizza.#sauce); // we could not access private 
    
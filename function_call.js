//**********************************hoisting************************************** 

//fun. decalration and var[var keyword] decalration is shifted to the top of their scope 

// sayMyName("anuradha")
// function sayMyName(name){
//     console.log(name);
// }


// console.log(age);//because var age (decalration )is moved  above but not initializing in hoisting 
// var age = 5




//hoisting in let and const [not possible] 

// console.log(age);

// let age = 6

//hoisting is not possible in the case of function expression

// hero()
//  let hero = function (){
//     console.log("hy");
// }

//hoisting is not possible in the case of class

// const obj = new Human();
// class Human {

// }


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& function as first class citizen &&&&&&&&&
//because we can declare variables return function ,pass as a arg.


// passing function into another function 
function greetMe(grret,name){
    console.log("hello",name);
    greet();
}
function greet (){
    console.log("greet of the day");
}
greetMe(greet,"Anu");


// returning function inside another function 
function solve(number){
    return function(number){
       return  number*number;
    }
}
let ans = solve(7);

console.log(ans(7));//if here we try to print only ans it doesn't work bcz ans is now a function which take a number and give o/p 


//############# array of functions ##############
const arr =[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
]
let anss = arr[0];
let res = anss(5,7);
console.log(res);

//function in object 

let obj = {
    age:23,
    ht:180,
    wt:36,
    greet :()=>{
        console.log("helllo ji ");
    }
}
console.log(obj.age);
console.log(obj.greet());//this will give undefined because  greet does not return anything, so its return value is undefined.
obj.greet();
// a variable decalred as global can be accessed by any scope or any where .

//************* function scope variables  */
function sayHy(){
    let fullName = "kuch bhi ";
    console.log("hello ",fullName);
}
console.log(fullName);// this will give error bcz a variable(let,const,var) declared in function scope is not accessiable out of that scope.
sayHy();

//var is not   block scop variable but const and let are block scope variables 


console.log(paise)
{
    var paise = 100;
}
console.log(paise)


/***--------------Temporal dead Zone ------------------ */
console.log(value)
console.log("anu")
console.log("radha")
let value = 20;
console.log(value)

f//rom line no 22 to25 it is a temporal dead zone bcz here accessing value of let and const vari. is not possible 
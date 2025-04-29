//function declartion 

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John"));

//function expression 
let  greet = function(name){
    return `Hello, ${name}!`;
}
console.log(greet("anamika"));

//Arrow function 

const great = (name)=>{
    return `Hello, ${name}!`;
}
console.log(greet("anamika"));

//call back functions 

function fetchData(callback){
    setTimeout(()=>{
        const data = "Data fetched successfully ";
        callback(data);
    },2000);
}
function processData(data){
    console.log(`processing data ${data}`);
}
fetchData(processData);


//returning a function 
function multiplier(factor){
    return function(number){
        return number * factor;
    }

}
const value = multiplier(2);
console.log(value(5));
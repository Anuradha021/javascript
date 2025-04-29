// let Person ={
//     name:"shiv",
//     age:21,
//     hobbies:["reading","writting","Singing"],
//     message:function(){
//         console.log("Hi my name is "+this.name);
//     }

// };
// console.log(Person);


//*************************using new keyword

// let Person = new Object();
// console.log(Person)
// Person.name = "shivshakti";
// Person.age = 21;
// Person.hobbies = ["reading","writing","singing"]
// console.log(Person);



// ********************************using create method 


let personPrototype = {
    name : "Mayank"
};

let person = Object.create(personPrototype);

console.log(person);  
// An important thing to note is, while we are using Object.create(), 
// this method creates a new empty object. In the above example person is a new empty object.        // {}

person.firstName = "kishor";
person.lastName = "sharma";
person.age = 21;
person.hobbies = ["reading", "writing", "sleeping"];

console.log(person);

// ****************************Using Factory functions
//A factory function can be defined as a function that creates an object and returns it.



// function createPerson(){
//     return{
//         firstName : "radha",
//         lastName : "gupta",
//         age : 21,
//         hobbies : ["sleeping", "writing", "playing"]
//     }
// }
// let Person = createPerson();
// console.log(Person);




function createPerson(fName, lName, age, hobbies){

    return {
        firstName : fName,
        lastName : lName,
        age : age,
        hobbies : ["sleeping", "writing", "playing"]
    }
}

let person = createPerson("Love", "Babbar", 24);

console.log(person);

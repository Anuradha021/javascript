
//Array Literal Notation
const numbers = [1,2,3,4,5]
const mixed = [1,'banana',2,true,{name: 'john'}]; 


//array constructor
const fruits = new Array('apple', 'banana', 'orange');

// Insertion at End
// We can insert an item/element at the end of an array using the push method.
const fruitss = ['apple', 'banana', 'orange'];

fruits.push('kiwi');
fruits.push('grapes');

console.log(fruitss); 


// Insertion at Start
// We can insert an item/element at the starting of an array using the unshift method.


const fruit= ['apple', 'banana', 'orange'];

fruits.unshift('kiwi');
fruits.unshift('grapes');

console.log(fruit); 


// insertion at Random Index
// To add an element/item at a random index inside an array we use the splice method.


array.splice(startIndex, deleteCount, item1, item2, ...);

const fru = ['apple', 'orange'];

// Inserting 'banana' at index 1
fru.splice(1, 0, 'banana');
 






let obj ={
    name :"Anuradha ",//here name is not double coated bcz we are not giving space 
    "full name" :"MS ANURADHA",
    //here you can see there is space b/w full and name  so we have to double coat it 
    greet :function(){
        console.log("how are you ")
    }
}
console.log(obj);
obj.greet();
console.log(typeof(obj));

obj2 = obj //shallow copy it is referncing to the same obj in the heap memory 



//-----------------------------------------------shallow copy and deep copy concept ---------------------------------------------


//Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
//Deep copy: means that all levels of the object are copied. This is a true copy of the object.



// creation of arrays 
//let arr =[1,2,3,4,5]
//array constructor
let brr = new Array('love',1,true);

//console.log(brr[0]);
//console.log(typeof(brr));


//-------------------------------------------ARRAY METHODS-------------------------------------------------
brr.push('joshi ')//add ele. at the end 
brr.push(20)
brr.push(30)
brr.push(40)
brr.push(50)
//brr.pop();//remove from end
//brr.shift()//remove leftmost

//brr.unshift('anuuu');//add value at the leftmost side 


// slice ( start index, end index) //exclude last index 


//console.log(brr.slice(2,5));
console.log(brr);

//---- SPLICE METHOOD IS USE TO INSERT , REMOVE , REPLACE AT ANY POSITION IN THE ARARY ---
// (brr.splice(1,2 ,'kavita'));
// console.log(brr);

//-------MAP METHOD ------------------##########

 let arrr = [10,20,30];
//  let ansarr = arrr.map((number)=>{
//      return number*number
// }) ;
// console.log(ansarr);

 arrr.map((number,index)=>{
    console.log(number);
    console.log(index);
}) ;

///-----------------------FILTER METHOD --------------------------------###########


// let array1 = [10,20,30,55,77,43,65];
// let array = array1.filter((number)=>{

//     return number%2===0 ;
//     // if(number%2===0){
//     //     return true;
//     // }
//     // else return false ;
// });
//console.log(array);


//#################################################  REDUCE METHOD (ACCUMALATOR AND CURRENT ) ########################
// IF WE WANT TO PERFORM MATHEMATICALLY CALCULATIONS AND  AT THE END SINGLE OUTPUT VALUE 

let arr = [10,20,30,40];
let ans = arr.reduce((acc,cur)=>{return acc+cur},0);//here zero is initialize value of accumaltor 
console.log(ans);
//-------------sort (ASC)---------------------

let crr = [1,9,4,3,2];
// console.log(crr.sort());

//-------------------------sort (DESC)-----------
console.log(crr.sort((a,b)=>b-a));
console.log(crr.indexOf(9));


//------------------------------find method-------------------
//find method =>returns at the first instance when true
let ar= ["radha","krishna","govind"];
let find = ar.find((a)=>{return a.includes("vi")})
console.log(find);   

//---for each
let a = [1,2,3];
a.forEach((value,index)=>{
    console.log("number",value,"index",index);
})
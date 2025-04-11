//       


function sayMyName(myName = "ShivShakti"){
    console.log("myName is ::",myName);
}
sayMyName();// if wwe pass nothing here then defalut name will retured whihc is SHivShakti.


function solve( value = {age:15,wt:90,ht:180}){
console.log("hey!!",value);
}
solve();

//here in the above fun. we pass obj as an default parameter , we can also pass an array 


function solvee( value = "Kalaishi"){
    console.log("hey!!",value);
    }
    solvee(null);//in this case null  printed
    solvee(undefined);// in this case default value   printed



    //function as a default parameter

    function getAge(){
        return 170;
    }
    function utility(name = "gaura",age = getAge()){
        console.log(name," ",age);
    }
    utility();
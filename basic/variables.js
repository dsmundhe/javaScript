/* 
VAR: Global Scope , Hoisting is possible / acces in block / can reassign / can redeclare

LET:  Block scope, Hoisting is not possible / access in block / can not reassign / can update / can not redeclare

CONST :  Block scope / Hoisting is not Possible / access in block / Can not reassign / can't update / can not redclare
*/

//var

var num = 10;
console.log(num);
var num = 20;
console.log(num);

//let

let num1 = 200;
console.log(num1);

//not possible
// let num1=50

num1 = 500;
console.log(num1);


//const 

const name = "Dipak";
console.log(name);

//update is not possible in const
// name="Dip";
// console.log(name);

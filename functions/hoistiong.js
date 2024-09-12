// Hoisting in js

//hoisting is possible in Normal functions only

//call before declare
sayHello();

//declare after call
function sayHello() {
    console.log('Hello DM');
}


// Not possible

// helloFun();
// const helloFun=()=>{
//     console.log('Hello DM....');
// }
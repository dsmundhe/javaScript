//spread operator in js

// in normal fun

function sum(...val) {
    console.log(val);
}

sum(10, 20, 30, 40, 50);

// in arrow fun

const add=(...sum)=>{
    console.log(sum);
}
add(1,2,3,4,5,6);
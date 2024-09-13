// Higher functions in js

let arr = [10, 20, 30, 40, 50, 60];


//.forEach()

// it not return new array and not change an original array
arr.forEach((val, index) => {
    console.log(index, ':', val)
})

//.map()

//same as foreach but it returns the new array
arr.map((val, index) => {
    console.log(index, ' : ', val);
})

//get new array form existing array

const newArr = arr.map((val) => {
    return val * 5;
});
console.log(newArr);

// try to do with forEach()

// const newArr1=arr.forEach((val)=>{
//     return val+100;
// })
// console.log(newArr1);

// give undefind


//.find()

// to find the element in array

const result = arr.find((val) => val == 10);
console.log(result);
//if is value present it returns value other wise it give undefind

//findIndex();

// use to find the index 
const index = arr.findIndex((val) => val == 10);
console.log(index);
// if element is present then it will return index num other wise return -1

//.includes
// check weather element is present or not
const include = arr.includes(10);
console.log(include);



//slice() 
// use to slice of an array
// it takes inpurt from to to value and ignore last value

let arr2 = [20, 30, 60, 40, 50, 80, 90];
const result1 = arr2.slice(1, 5);
console.log(result1);

// if slice(2) it will print from 2 to till last 


let arr3 = [10, 20, 30, 40, 50, 60];
const result2 = arr3.splice(1, 4);
console.log(result2);
console.log(arr3);


//.filter()
// it changes an existing array

const arr1 = [10, 20, 30, 40, 50, 60];
const filarr = arr1.filter((val) => {
    return val !== 10;
});
console.log(filarr);

console.log(arr1);
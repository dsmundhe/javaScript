// Array in js
//multiple values store in one reference


const arr = [10, 20, 30, 40, 50, 60];
console.log(arr);

//find size of array
console.log(arr.length);

//change value in the array
arr[0] = 10000;
console.log(arr);

//can store multiple data types in array in js
const newArr = ["Dipak", 20, 20.5, true, () => {
    console.log('Hey i am function')
}];
console.log(newArr);
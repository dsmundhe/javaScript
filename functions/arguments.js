// argument object in js

function sum(a, b) {
    let res = 0;

    for (let i = 0; i < arguments.length; i++) {
        res = res + arguments[i];
    }
    return res;
}
const result = sum(10, 20, 30, 40, 50, 60, 70);
console.log(result)
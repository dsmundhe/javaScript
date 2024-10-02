function add(a, b) {
    return a + b;
}

function square(val) {
    return val * val;
}
function mul(a, b) {
    return a * b;
}

// const result=square(add(5,20));
// console.log(result)

function compostionofTwoFuns(fun1, fun2) {
    return function (a, b) {
        return fun2(fun1(a, b));
    }
}
const result = compostionofTwoFuns(add, square);

const result1 = compostionofTwoFuns(mul, square);

console.log('Add and Square : ', result(5, 6));

console.log('Multiply and Square : ',result1(5, 5));

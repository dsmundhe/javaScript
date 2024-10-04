// IIFE immedigetly invoked function expression in js
// which execute as soon as define
// use to create private and public variables
//avoid pollution of global variable naming
// also use for to create promises


(function add(a, b) {
    console.log(a + b);
})(10, 20);



const data = (function getVal(a) {
    return a;
})(20);
console.log(data)


//for asynchronous function in variable

const getData = (async function getApiData() {
    try {
        const response = await fetch();
        const data = response.json();
        return data;
    } catch (error) {
        return 'could not fetch.........'
    }
})();
console.log(getData)



// use for to Create private and public varibles

const atm = function atm(initialBalance) {
    let balance = initialBalance;
    function widraw(amount) {
        balance -= amount;
        return 'Account balance is : ' + balance;
    }
    return { widraw }
}

const dipakAccount = atm(5000);
console.log(dipakAccount.widraw(500));
console.log(dipakAccount.widraw(500));

// curring in js

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(add(10)(20)(20));


//sendAutoEmail

function sendAutoEmail(from) {
    return function (to) {
        return function (subject) {
            console.log(`Hii ${to}`);
            console.log(`This mail send by ${from}`);
            console.log(`Subject : - ${subject}`);
        }
    }
}
const stepFrom = sendAutoEmail('dsmundhe28@gmail.com');
const stepTo = stepFrom('nitinmundhe08@gmail.com');
console.log(stepTo('Hello brother whats up'));
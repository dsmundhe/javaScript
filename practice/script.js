// closure 

/*********************************** Closure  *************************************** */

// function addCount(){
//     let count=1;
//     function counter(){
//         console.log('Val  : ',count);
//         count++;
//     }
//     return counter;
// }
// const addVal=addCount();
// addVal();
// addVal();
// addVal();




/************************************     Curry in JS     **************************************** */

function addThreeVal(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

let add = addThreeVal(10)(20)(90);
console.log(add);


function sendEmail(from) {
    return function (to) {
        return function (sub) {
            return console.log(`This Mail from ${from} and for ${to} the message is : ${sub}`);
        }
    }
}

const fromMail = sendEmail('dsmundhe');
const toMail = fromMail('nitinmundhe');
toMail('Hello Bhai Kaise ho!');

//through mordern JavaScript
const sumThree = (a) => (b) => (c) => console.log(a + b + c);
sumThree(10)(20)(500);

// sendMail

const sendAutoEmail = (from) => (to) => (sub) => console.log(`from : ${from} to : ${to} sub: ${sub}`);

sendAutoEmail('Dipak Mundhe')('Nitin Mundhe')('Hello Kaise ho Bhai.........');

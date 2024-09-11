// if
//if else
// if  else if .......
//switch
// ternary operator

let age = 20;

if (age >= 18) {
    console.log('Adult');
}

//if else

if (age >= 18) {
    console.log('Adult..!');
}
else {
    console.log('Not...!');
}

// if else ladder
if (age >= 18) {
    console.log('Adult..!');
}
else if (age >= 20) {
    console.log('Age : 20+');
}
else if (age >= 50) {
    console.log('Age : 50+');
}
else {
    console.log('Not valid...');
}


//switch
let num = 1;
switch (num) {
    case 1: console.log('Num is 1');
        break;
    case 2: console.log('Num is 2');
        break;
    case 3: console.log('Num is 3');
        break;
    default: console.log('Enter valid num...')
}


// ternary operator

const name = 'Dipak';

name == 'Dipak' ? console.log('Yes name is Dipak') : console.log('No , name is not Dipak')
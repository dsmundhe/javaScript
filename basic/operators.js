//arithematic 
// logical
//comarision

//Arithematic operators
let num = 12;
let num1 = 20;

let sum = num + num1;
let diff = num - num1;
let mul = num * num1;
let div = num / num1;

console.log("Sum :", sum);
console.log('Diff :', diff);
console.log('Mul : ', mul);
console.log('Div :  ', div);


//Logical operators

let age = 20;
let gender = 'male';

// AND $$ operator
//both conditions should true
if (age >= 18 && gender == 'male') {
    console.log('Yes , you are adult !')
} else {
    console.log("No , you are not adult !")
}

//OR operator
if (age >= 18 || gender == 'female') {
    console.log('Yes , your age is more than 17 or your male')
} else {
    console.log('No...')
}

//Not operator
//usuall use with comparission operators

/*
!= Not equal to
!==
*/


//Comparisson operators

/*
== Equal to
=== Equal to
> Greater than
< Less tahn
>= Greater tahn equal to
<= Less than equal to
*/
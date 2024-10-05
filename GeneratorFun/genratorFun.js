// this provide by js 
// where we can custmise for...of loop behaviour 

function* mkIterator(start = 0, end = Infinity) {
    yield (0);
    yield (1);
    yield (2);
    yield (3);
    yield (4);
    yield (5);
}

const valIterator = mkIterator();
console.log(valIterator.next().value);
console.log(valIterator.next().value);
console.log(valIterator.next().value);
console.log(valIterator.next().value);


//Yeild keyword use to create iterator 
// which only use with Generator function*


// *****************************************      generator* with simple loop      ***********************************************


function* mkIteratorusingGen(start = 0, end = Infinity, stepSize = 1) {
    for (let i = start; i < end; i += stepSize) {
        yield (i);
    }
}

const genIterator = mkIteratorusingGen(0, 10, 1);
for (const element of genIterator) {
    console.log(element)
}


// it very simple to construct than custmize Iterator.
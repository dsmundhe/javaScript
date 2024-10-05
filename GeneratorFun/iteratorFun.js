// Iterator function basically use to change default behaviour of an for...of loop
// it contains ther arguments basicall start,end,and stepSize
//it works on three main keyPoints which are value,next(),and done to konw about state

//this is an old process of we can leangthy process
function mkIterator(start = 0, end = Infinity, stepSize = 1) {
    let newStart = start;
    let step = stepSize;
    return {
        next() {
            let result;
            if (newStart < end) {
                result = { value: newStart, done: false };
                newStart += 1;
                step++;
                return result;
            }
            return { value: newStart, done: true }
        }
    }
}


// this not works in for...of loop for that we have to use Genreator fun in js with yeild keyword....
const valIterator = mkIterator(0, 20, 1);
console.log(valIterator.next().value);//0
console.log(valIterator.next().value);//1
console.log(valIterator.next().value);//2
console.log(valIterator.next().value);//3
console.log(valIterator.next().value);//4
console.log(valIterator.next().value);//5



//Not works we have to Generator function....

// for(const val of valIterator){
//     console.log(val);
// }
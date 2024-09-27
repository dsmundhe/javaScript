const inc = document.getElementById('count');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');

function addCount() {
    let count = 1;
    function counter() {
        ++count;
        inc.innerText = count;
    }
    function reducer() {
        --count;
        inc.innerText = count;
    }
    return { counter, reducer };
}



const count1 = addCount();

btn.addEventListener('click', count1.counter);
btn1.addEventListener('click', count1.reducer);

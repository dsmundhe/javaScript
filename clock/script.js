let element = document.getElementById('time');
const btn = document.getElementById('btn');
const btnstart = document.getElementById('btnstart');

function getTime() {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();
    element.innerText = `${hrs} : ${mins} : ${sec}`

}

 

const clearTime = setInterval(getTime, 1000);
btn.addEventListener('click', () => {
    clearInterval(clearTime)
})

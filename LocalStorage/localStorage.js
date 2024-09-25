const btn = document.getElementById('btn');
const name = document.getElementById("name");
const namebtn = document.getElementById("namebtn");

btn.addEventListener('click', () => {
    localStorage.setItem('name', 'Dipak Mundhe');
})

namebtn.addEventListener('click',()=>{
    const result=localStorage.getItem('name');
    name.innerText=result;
})
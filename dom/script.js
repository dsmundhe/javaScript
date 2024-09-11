console.log("hello I am DM");
// selectors in dom

// const div = document.getElementsByTagName("div");
// console.log(div);

// const box = document.getElementsByClassName("box-1");
// console.log(box);

// const box5 = document.getElementById("box-f5");
// console.log(box5.innerText);

// const box2=document.querySelector('.box-1');
// console.log(box2);
// console.log(box2.innerText);

// const allbox=document.querySelectorAll('li');
// console.log(allbox);

//siblings
// const box = document.getElementById("box-f5");
// console.log(box.previousSibling);
// console.log(box.previousElementSibling);

// append child

// const ul=document.querySelector('ul');
// const newElement=document.createElement('li');
// newElement.innerText='Hello I am new Element!';
// ul.appendChild(newElement);
// ul.prepend(newElement);

//remove

// const delval = document.querySelector(".box-2");
// delval.remove();

// replaceChild

// const list = document.querySelector("ul");
// const replaceVal = list.children[1];
// const newVal = document.createElement("li");
// newVal.innerText = "Hey I am new Element!";
// list.replaceChild( newVal,replaceVal);

//parent node

// const parent = document.querySelector("html");
// const val1 = parent.parentElement;
// const val = parent.parentNode;
// console.log(val1);
// console.log(val);

// previousSiblings

// const perBox=document.querySelector('.box-2');
// console.log(perBox.previousSibling)
// console.log(perBox.previousElementSibling);

//nextSiblings

// const nexBox = document.querySelector(".box-2");
// console.log(nexBox.nextSibling);
// console.log(nexBox.nextElementSibling);


//firstChild and lastChalid

const fchild=document.querySelector('ul');
console.log(fchild.firstChild);
console.log(fchild.firstElementChild)
console.log(fchild.lastChild);
console.log(fchild.lastElementChild);
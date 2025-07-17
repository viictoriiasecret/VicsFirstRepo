
console.log("I'm in the javascript file")

//getting element by id 
const funElement = document.getElementByID("fun");


document.getElementById('fun')

console.log(FunElement.target)

const funElement = document.getElementByID("fun");

funElement.innHTML = "JavaScript is so fun I never wantt to use another programming languege again!"

console.log(funElement.innerHTML);

//changing color 


const pElements = document.getElementssBYTagName('p');

console.log('selected by tag p', pElements);

console.log('first elemnt of p tag list', pElements[0]);

const pTagsByClass = document.getElementsByClassName('js-p-tag');

console.log('class list', pTagsByClass)

//update href attribute of a tag 

const aTag = document.getElementsByTagName('a')[0]

console.log(aTag)

const href = "" // website that i want to add 

console.log(aTag)

const h1Element = document.createElement('h1')

const bodyElement = document.getElementsByTagName('body')[0]

bodyZElement.appendChild(h1Element) 
const h1Text = document.createTextNode ('This is a new header')
//body has p as chind and this will remove it 
const domElement = document.getElementById('DOM')
bodyElement.removeChild(domElement);

//list of all the buttons made
const buttonList = document.getElementsByTagName('button')
console.log(buttonList);

const changeBackground = (color) => {
bodyElement.style.backgroundColor = color;
}

for(const btn of buttonList ){
    console.log('im in for the loop');
    btn.addEventListener('click', (event) => changeBackground
    (event.target.textContent)) // called the funciton a different way for it to be event
} //of does value not just index(in does that)
//cant pass function as an argument ()
//






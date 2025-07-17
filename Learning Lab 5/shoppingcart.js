let listings = {jacket: 6, shirt: 5, necklace: 4, jeans: 9} //price 



//function to make cart total 
const addtocart = (event, selection)  => {
    console.log(event);

}
let number = 0                      
//store items 
for(item of Object.keys(listings)){ //create new buttons for item in listings 

const addbutton = document.createElement('button');
const storeitems = document.getElementById('store-items');
const buttonText = document.createTextNode(item)
addbutton.appendChild(buttonText);
storeitems.appendChild(addbutton)


//on hover:
 
addbutton.addEventListener('mouseover', () => {
    addbutton.classList.add('pulse-animation');

    addbutton.addEventListener('mouseout', () => {
        addbutton.classList.remove('pulse-animation');
    }, { once: true });
});

addbutton.addEventListener('click', function() {
    const chosenItem = document.createElement('li');//create chosen item
    const buttonTexts = addbutton.textContent;
    chosenItem.textContent = buttonTexts; //textcontent to extract text
    cart.appendChild(chosenItem);//add to cart 
    
    const total = document.getElementById("cart-total") // add to total
   
    
    number += listings[addbutton.textContent] 
    total.textContent = number 
 
    
});;




}
 





















// document.createElement('button');
// document.createTextNode(''); //name depends on listing
// buttonelement.appendChild(buttonText);
//how do i intergrate the items from listing into this? 





    //actually add to cart and add to total
    //create list of ol with chosen item 
    //call shoppingcart(selection) function?

// const buttonList = document.getElementsByTagName('button');
// console.log(buttonList);
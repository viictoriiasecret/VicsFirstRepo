

// maybe use as my shop program 

let listings = {jacket: 6, shirt: 5, necklace: 4, jeans: 9} //price 
let quantity = {jacket: 3 , shirt: 4, necklace: 5, jeans: 7}  //quantity 

function shoppingcart(selection) {
    let listings = {jacket: 6, shirt: 5, necklace: 4, jeans: 9} //price 
    let quantity = {jacket: 3 , shirt: 4, necklace: 5, jeans: 7}  //quantity 
    
    let total = 0 
    // let newtotal =0
    
    for(item in selection){
    
    let amount = selection[item]

    if (!(item in listings)) {
        console.log(`${item} is not in the shop at this time!`);
        continue; //using continue for now cuz idk ab yield in js
    } 
    if (quantity[item]<= 0){
        console.log( `No more ${item}, please come back later for more!`);
        continue;
     }
    
    if (amount > quantity[item]){
        console.log( `Sorry we dont have ${amount} of our ${item}s!`);
        continue;

  
    } else {
        {total = total + (listings[item] * amount)

        quantity[item] = quantity[item] - amount

        // newtotal = total + newtotal
        }}
    
           
        console.log(`You bought ${selection[item]} ${item}(s) for $${listings[item]}!`)}
            
            return `Your total is $${total}! 
            
Shop again at Victoria's Depop Later!`}

            // any listings should work as long as they both dictionaries 

console.log( shoppingcart(
    
    {jacket:1 , shirt: 3, jeans: 1 }))


 // idea: selection and amounts as two lists then we can get multiple thigns 
 // better idea: selection as a dictionary of what you select and amount 
 // iterate through it using the values as what you multiply buy and out 






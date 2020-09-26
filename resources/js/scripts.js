const itemsContainer = document.getElementById('items')


const itemList = document.getElementById('item-list')
console.log(itemList)
itemList.innerHTML = '<li> Hello World</li>'

import data from './data.js'
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')


// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300

    // Add the image to the div
    newDiv.appendChild(img)
    console.log(img)
     // put new div inside items container
     itemsContainer.appendChild(newDiv)

 

     // create a paragraph element for a description
let desc = document.createElement('p')
// give the paragraph text from the data
desc.innerText =data[i].desc
// append the paragraph to the div
newDiv.appendChild(desc)
// do the same thing for price
let price = document.createElement('p')
price.innerText = data[i].price
newDiv.appendChild(price)
let button = document.createElement('button')
button.id = data[i].name


  // creates a custom attribute called data-price.
  // That will hold the price for each element in the button
  button.dataset.price = data[i].price
  button.innerHTML = "Add to Cart"
  newDiv.appendChild(button)
  // put new div inside items container
  itemsContainer.appendChild(newDiv)
  

  const cart = [ ]

  
  console.log('*********************')

  const all_items_button = Array.from(document.querySelectorAll("button"))

  all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
  }))
//-------------------------------------------------------------
//add Item
  function addItem(name, price) {

     for (let i = 0; i < cart.length; i +=1) {
         if (cart[i].name === name) {
             cart[i].qty += 1
             //stop here
         }
     }
      const item ={ name:name, Price: price, qty: 1}
      cart.push(item)
  }
//----------------------------------------------------------------
  // show Items
  function showItems() {
      const qty = getQty()
      cartQty.innerHTML = `Thank you for buying ${getQty()} items today`


      let itemStr = ''
      for(let i = 0; i< cart.length; i += 1) {
          //console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        // const name = cart[i].name
        // const price = cart[i].price
        // const qty = cart[i].qty

        const { name, price, qty} = cart[i]

          itemStr += `<li>
          ${name} 
          $${price} x ${qty} =
          ${qty * price} 
          </li>`
      }
      itemList.innerHTML = itemStr

      //console.log (`Total in cart:  $${(getTotal())}`)
      cartTotal.innerHTML = `Total in cart:  $${(getTotal())}`
  }
  //---------------------------------------------------------------
  //Get Qty
  function getQty() {
      let qty = 0
      for (let i =0; i< cart.length; i += 1){
          qty += cart[i].qty
      }
      return qty
  }
//---------------------------------------------------------
  //Get Total
function getTotal() { 
    let total = 0 
    for (let i = 0; i < cart.length; i +=1) {
        total += cart[i].price * cart[i].qty
    } 
    return total.toFixed(2)

}

function removeItem(name, qty = 0 ) {
   for (let i = 0; i < cart.length; i += 1) {
       if (cart[i].name === name) {
           if(qty>0) {
            cart[i].qty -= qtty
           }
           
           if (cart[i].qty < 1 || qty === 0) {
             cart.splice(i, 1)
           }

        
           return
       }

   }
}




//------------------------------------------------------------
  addItem('apple', 0.99)
  addItem('orange', 1.29)
  addItem('Opinion', 0.02)
  addItem('Yoga mat', 15.99)
  addItem('orange', 1.29)
  addItem('apple',0.99)
  addItem('yoga mat', 15.99)

  
  showItems()

removeItem('orange')

showItems(itemList.innerHTML)

}


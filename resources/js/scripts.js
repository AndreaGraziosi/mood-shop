const itemsContainer = document.getElementById('items')
import data from './data.js'

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
let desc = document.createElement('P')
// give the paragraph text from the data
desc.innerText =data[i].desc
// append the paragraph to the div
newDiv.appendChild(desc)
// do the same thing for price
let price = document.createElement('P')
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

  const name = name
  const price = price
  
  const obj = {name, price }
  console.log(obj)
  console.log('*********************')

  function addItem(name, price) {

     for (let i = 0; i < cart.length; i +=1) {
         if (cart[i].name === name) {
             cart[i].qty += 1
             //stop here
         }
     }
      const item ={ name, price, qty: 1}
      cart.push(item)
  }

  // show Items
  function showItems() {
      const qty = getQty()
      console.log (`Thank you for buying ${getQty()} items today`)

      for(let i = 0; i< cart.length; i += 1) {
          console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
      }

     

      console.log (`Total in cart:  $${(getTotal())}`)
  }
  //Get Qty
  function getQty() {
      let qty = 0
      for (let i =0; i< cart.length; i += 1){
          qty += cart[i].qty
      }
      return qty
  }

  //Get Total
function getTotal() { 
    let total = 0 
    for (let i = 0; i < cart.length; i +=1) {
        total += cart[i].price * cart[i].qty
    } 
    return total.toFixed(2)

}






  addItem('apple', 0.99)
  addItem('orange', 1.29)
  addItem('Opinion', 0.02)
  addItem('Yoga mat', 15.99)
  addItem('orange', 1,29)
  addItem('apple',0.99)
  addItem('yoga mat', 15.99)

  
  showItems()



}


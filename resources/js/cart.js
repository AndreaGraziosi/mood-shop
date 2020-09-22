const cart = [ ]

function addItem(name, price) {
    cart.push(name)
}
function showItems() {
    console.log (cart)
}
addItem('apple', 0.99)
addItem('orange', 1.29)

showItems()
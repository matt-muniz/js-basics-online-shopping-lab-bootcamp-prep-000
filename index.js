var cart = [];
var newObject = {}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor((Math.random() * 100) + 1);
  newObject = {itemName: item, itemPrice: price}
  cart.push(newObject)

  if(cart.length > 0){
    return `${newObject.itemName} has been added to your cart.`
  }else{
    return "Your shopping cart is empty."
  }
}
addToCart("mocha")
function viewCart() {
  
  // write your code here
  if (cart.length > 0){
    for(var i = 0; i < cart.length; i++){
      cart.push(newObject[i])
    }
    return `In your cart, you have ${newObject.itemName} at $${newObject.itemPrice}.`
  }else{
    return "Your shopping cart is empty."
  }
  
}
viewCart()
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

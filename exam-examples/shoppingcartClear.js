const shoppingCart= new Map();

shoppingCart.set("Apple",2);
shoppingCart.set("Mango",2);
shoppingCart.set("Banana",2);

console.log("Before Update\n",shoppingCart);

shoppingCart.clear();
console.log("After Clearing Cart\n", shoppingCart);
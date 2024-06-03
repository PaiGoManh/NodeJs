const shoppingCart= new Map();

shoppingCart.set("Apple",2);
shoppingCart.set("Mango",2);
shoppingCart.set("Banana",2);

if (shoppingCart.size === 0) {
    console.log("The shopping cart is empty.");
} else {
    console.log("The shopping cart has items.");
    console.log(shoppingCart)
}
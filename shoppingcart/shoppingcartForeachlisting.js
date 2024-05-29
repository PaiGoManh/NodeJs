const shoppingCart= new Map();

shoppingCart.set("Apple",2);
shoppingCart.set("Mango",2);
shoppingCart.set("Banana",2);

shoppingCart.forEach((quantity, item) => {
    console.log(item, quantity);
});
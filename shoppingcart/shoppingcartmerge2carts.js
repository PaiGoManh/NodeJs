const shoppingCart= new Map();

shoppingCart.set("Apple",2);
shoppingCart.set("Mango",2);
shoppingCart.set("Banana",2);

const additionalItems = new Map([
    ["Pineapple", 1],
    ["Grapes", 4]
]);

additionalItems.forEach((quantity, item) => {
    if (shoppingCart.has(item)) {
        shoppingCart.set(item, shoppingCart.get(item) + quantity);
    } else {
        shoppingCart.set(item, quantity);
    }
});

console.log("After Merging Additional Items\n", shoppingCart);

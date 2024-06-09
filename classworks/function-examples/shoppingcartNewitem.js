const shoppingCart= new Map();

shoppingCart.set("Apple",2);
shoppingCart.set("Mango",2);
shoppingCart.set("Banana",2);

console.log("Before Update\n",shoppingCart);

const newItem = "Orange";
const newItemQuantity = 3;

if (!shoppingCart.has(newItem)) {
    shoppingCart.set(newItem, newItemQuantity);
}

console.log("After Adding New Item\n", shoppingCart);



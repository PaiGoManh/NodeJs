const shoppingCart= new Map();

shoppingCart.set("Apple",2);
shoppingCart.set("Mango",2);
shoppingCart.set("Banana",2);

console.log("Before Update\n",shoppingCart);

const item="Mango";
const value=10;

if(shoppingCart.has(item)){
    shoppingCart.set(item,shoppingCart.get(item)+value);
}

console.log("After Update\n",shoppingCart);


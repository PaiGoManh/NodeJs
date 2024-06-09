const shoppingCart= new Map();

shoppingCart.set("Apple",2);
shoppingCart.set("Mango",2);
shoppingCart.set("Banana",2);

console.log("Before Update\n",shoppingCart);

item ="Banana";

if(shoppingCart.has(item)){
    shoppingCart.delete(item);
}

console.log("After Update\n",shoppingCart)
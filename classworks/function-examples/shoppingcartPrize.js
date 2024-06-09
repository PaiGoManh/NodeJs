const shoppingCart= new Map();

shoppingCart.set("Apple",2);
shoppingCart.set("Mango",2);
shoppingCart.set("Banana",2);

const prize= {"Apple":0.8,"Mango":1.20,"Banana":2.01}
let totalcost=0;


shoppingCart.forEach((value, key) => {
    console.log(value, prize[key]*value);
    totalcost+=prize[key]*value;
});

console.log("Total cost:",totalcost);
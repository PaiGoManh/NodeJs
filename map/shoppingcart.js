const shoppingCart = new Map();

shoppingCart.set("Apple",2);
shoppingCart.set("Banana",3);
shoppingCart.set("Milk",1);


const prices ={"Apple":0.88,"Banana":0.50,"Milk":2.50};
let tcost = 0;


shoppingCart.forEach((a,b)=>{
    const ip=prices[b];
    it=ip*a;
    tt=+it;
    console.log(`${b}\t\t${a}\t\t${ip}\t\t${it}`);
})



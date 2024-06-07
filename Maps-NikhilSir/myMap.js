let myMap =new Map();

myMap.set("Name","John");
myMap.set("Age","25");

console.log(myMap.get("Name"));
console.log("--------------------------")
console.log(myMap.has('Name'));
console.log("--------------------------")
console.log(myMap.get("Name"));
console.log(myMap.get("Age"));
console.log("--------------------------")
console.log("Delete AGe")
console.log("Before Delete")
console.log(myMap.get("Name"));
console.log(myMap.get("Age"));
myMap.delete('Age');
console.log(" After Delete")
console.log(myMap.get("Name"));
console.log(myMap.get("Age"));
console.log("IsAGe there:",myMap.has('Age'))
console.log("--------------------------")

myMap.set("Age","30");
myMap.set("Address","Ernakulam");
console.log(myMap.size);
console.log("--------------------------")

console.log("ForEach Method");

myMap.forEach((value,key,a)=>{
    console.log(`${key}:${value}`);
})

console.log("--------------------------")
console.log("Using Function");

// myMap.function(value,key){
//     console.log(value,key);
// }






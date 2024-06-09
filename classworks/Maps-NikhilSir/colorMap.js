let colorMap = new Map([['color','blue'],['size',['large']],['shape','circle']])

for(let [key,value] of colorMap){
    console.log(`${key}:${value}`);
}

console.log("Using For Each");

colorMap.forEach((value,key)=>{
    console.log(`${key}:${value}`);
})

let colorArray = Array.from(colorMap);
console.log(colorArray);


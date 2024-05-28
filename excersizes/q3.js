const str ="A cart or dray is a vehicle designed for transport, using two wheels and normally pulled by draught animals such as horses, donkeys, mules and oxen, or even smaller animals such as goats or large dogs. A handcart is pulled or pushed by one or more people.";

let wordfrequency= {}
let str1=str.replace(/[^a-zA-Z ]/g, "")
let words= str1.split(" ")

console.log(words)

for(let ele of words){
    if(wordfrequency[ele]){
        wordfrequency[ele]++
    }else{
        wordfrequency[ele] =1;
    }
    
}

console.log(wordfrequency)



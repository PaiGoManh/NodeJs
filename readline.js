
const readline =require('readline');

const rl = readline.createInterface({
    input :process.stdin,
    output :process.stdout
});

function askName(){
    rl.question("Name: ",function(name){
        console.log(`Hello, ${name}`);
        askAge();
    });
}

function askAge(){
    rl.question("Age :",function(age){
        console.log(`Age :${age}`);
        askPlace();
    })
}

function askPlace(){
    rl.question("Place :",function(place){
        console.log(`Place:${place}`);
        askPhone();
    })
}

function askPhone(){
    rl.question("Phone NO:",function(phone){
        console.log(`Phone:${phone}`)
        console.log('Values Updated');
        rl.close();
    })
}

console.log("Enter Your Details, ");
askName();
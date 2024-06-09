const { stdin } = require('process');
const readline =require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let user= {
    name : '',
    age : ''
}

function askName(){
    rl.question("Name",function(name){
        user.name=name;
        askAge();
    })
}

function askAge(){
    rl.question("Age:",function(age){
        user.age=age;
        console.log(`Name :${user.name}`);
        console.log(`Age : ${user.age}`);
        rl.close()
    })
}

askName();

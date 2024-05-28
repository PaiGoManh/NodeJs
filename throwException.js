function chkAge(age){
    if(age<18){
        throw new Error("You age must be 18 or older");
    }else{
        console.log("You are allowed");
    }
}

try{
    chkAge(70);
}catch(error){
    console.log("Error:"+error.message);
}finally{
    console.log("Thanks for visiting");
}
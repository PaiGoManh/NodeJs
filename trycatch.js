function risk(){

    // let d;
    // return d/0;     #NAN

    // let a;
    // let c=a+b;
    // return c       #not defined

    let obj;
    return obj.property
}

try{
    let result = risk();
    console.log(result);
}catch(error){
    console.log("Error:"+error.message);
}finally{
    console.log("its always executed");
}
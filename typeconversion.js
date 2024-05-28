//Implicit Conversion

console.log("20"+5)

console.log("20"-5)

console.log("20"*5)

console.log("20"%5)

console.log("20"/5)

console.log(true+5)

//Explicit Conversion

a= Number("42");
console.log(a);

b=Number("Hello");
console.log(b);

c=String(123);
console.log(typeof(c));

d=String(false);
console.log(typeof(d));

{
    a =Boolean(0);
    console.log(a);

    b =Boolean(1);
    console.log(b);

    c =Boolean("Hello");
    console.log(c);

    d =Boolean("");
    console.log(d);
}

{
    console.log(parseInt("15.99"));
    console.log(parseInt("hello"));

    console.log(parseFloat("15.99"));
}






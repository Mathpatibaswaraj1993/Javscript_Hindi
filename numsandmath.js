const score =400


console.log(score)
const  balance = new Number(100)

console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(balance)

const otherNumber = 123.5933

console.log(otherNumber.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-DOLLER'))


//+++++++++++++++++++++++++++++ Maths  +++++++++++++++++++++++++++


console.log(Math)

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.min(4,4,5,5,3));

console.log(Math.random())
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1 );

const min =10;
const max =20;

console.log(Math.random() * (max - min + 1)) + min
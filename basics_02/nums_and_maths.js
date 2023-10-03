const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//for precision value

const otherNum = 123.8699

//console.log(otherNum.toPrecision(3));//returns 124

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));



// *************maths*********************

// console.log(Math);
// console.log(Math.abs(-4));//reurns +ve value
// console.log(Math.round(4.6));//returns 5
// console.log(Math.ceil(4.2));//returns 5
// console.log(Math.floor(4.9));//returns 4
// console.log(Math.min(4,3,5,6,8));
// console.log(Math.max(4,6,8,2,9));

//console.log(Math.random());//always return values between 0 to 1
//console.log(Math.floor(Math.random()*10)+1);//added one to avoid zero, floor gives lowest value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)




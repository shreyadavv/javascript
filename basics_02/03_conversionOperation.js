let score = "33ab"//when its null we get 0 as number,when its undefined we get Nan
//if its true we get 1 and 0 for false

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);// it converts into number
//console.log(valueInNumber);//value is not a number

//"33" => 33
//"33a" => Nan,but type remains as number

let isLoggedIn ="1"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 =>true;0 => false;
// "" => false
//"shreya" => true

let someNum = 33
let stringNumber = String(someNum)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// ********************OPERATIONS***********************************
let value=3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-1);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "hello"
let str2 = " shreya"
let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true); 
// console.log(+true);//gives 1

// console.log(+"");// gives 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2


let gameCounter = 100
gameCounter++;//prefix,postfix
console.log(gameCounter);

//link to study 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
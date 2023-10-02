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
console.log(stringNumber);
console.log(typeof stringNumber);
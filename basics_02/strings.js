const name = "shreya"
const repoCount = 50

//console.log(name + repoCount + "value");//we use `` rather than +

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String('shreya-ya-dav') //string declaration

// console.log(gameName[0]);
// console.log(gameName.__proto__); //accessing prototype


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(4));
//console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4) //4 is excluded
console.log(newString);

const anotherstring = gameName.slice(-8,-4) //-ve values are allowed
console.log(anotherstring);


const newStringone = "  shreya  "
console.log(newStringone.trim());//removes whitespaces

const url = "https://shreya.com/shreya%20yadav"
console.log(url.replace('%20','-'));
console.log(url.includes('shreya'));

console.log(gameName.split('-'));//splits the strin in array based on -

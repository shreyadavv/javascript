// primitive, they are call by value

// 7 types: string,number,boolean,null,undefined,symbol(make value unique),Bigint

const score = 100
const scoreValue=100.3

const isLoggedIn=false
const temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);//false, symbol makes them unique

const bigNum=28267467346n //n makes it automatically bigint


//javascript is dynamically typed language

//refernce type(non primitive),call by reference
//arrays,objects,functions

const heroes = ["shaktiman", "doga", "naagraj"];

let myobj = {
    name: "shreya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
} //function can be treated as variable in java script

//how to know the data type, we do that using: typeof()
console.log(typeof myFunction);
//return type of non-primitive is object(for function if we go deep its function object)
//link: https://262.ecma-international.org/5.1/#sec-11.4.3
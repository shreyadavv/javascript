//array 
const myArr = [0, 1, 3, 4, 5]
const Heros = ["batman","naruto"]

const myArr2 = new Array(1, 2,3,4)

//elements can be of different types,are resizable,arrays cant be accessed using arbitrary strings
//arrays create shallow copies,a copy that share the same reference point

//console.log(myArr[1]);

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()//pop the last element

// myArr.unshift(9)//adds it to the starting of an array
// myArr.shift()//removes the first ele

// console.log(myArr);

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9));// -1 because doesnt exist

// const newArr = myArr.join()//it also chnges array to string

// console.log(myArr);
// console.log(newArr);//0,1,3,4,5
// console.log(typeof newArr);//string

//slice, splice

console.log("A",myArr);//A [ 0, 1, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)//3 is excluded
console.log(myn1);//[ 1, 3 ]
console.log(myArr);//[ 0, 1, 3, 4, 5 ]

const myn2 = myArr.splice(1,3) //it manipulates the original array,3 is included
console.log(myn2);//[ 1, 3, 4 ]
console.log(myArr);//[ 0, 5 ]


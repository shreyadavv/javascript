const marvel_heroes=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heroes.push(dc_heros)
//console.log(marvel_heroes)//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


//const all_heros = marvel_heroes.concat(dc_heros)
//console.log(all_heros);//concat returns new array [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//const all_newheros=[...marvel_heroes, ...dc_heros]
//console.log(all_newheros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);



console.log(Array.isArray("shreya"))
console.log(Array.from("shreya"));//[ 's', 'h', 'r', 'e', 'y', 'a' ]
console.log(Array.from({name: "shreya"}))//[] returns a null array (interesting)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

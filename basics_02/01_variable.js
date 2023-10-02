const accountId = 144553
let accountEmail = "shreya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //it can happen but be careful
let accountState;//undefined

// accountId = 2 //not allowed

accountEmail = "yadav@gmail.com"
accountPassword = "212121"
accountCity = "begal"

console.log(accountId);


/*
dont use var,use let because of issue in log scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
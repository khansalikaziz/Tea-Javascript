const accountId=144553
let accountEmail = "salik@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId = 2 // not allowed

accountEmail = "aziz@gmail.com"
accountPassword="234454"
accountCity="Gaya"
let accountState;

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
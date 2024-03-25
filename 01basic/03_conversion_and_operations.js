let score = null

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
// console.table([valueInNumber,typeof(valueInNumber)])

// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1
// false ==> 0
// null ==> 0
// undefined ==> NaN

let isLoggedIn =undefined

let booleanIsLoggedIn = Boolean(isLoggedIn) 

// console.table([booleanIsLoggedIn,typeof booleanIsLoggedIn])

// 1 ==> true
// 0 ==> false
// "" ==> false
// "salik" ==> true
// null ==> false
// undefined ==> false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber,typeof(stringNumber))

// conversion condition
// console.log( null > 0)
// console.log( null === 0)
// console.log( null >= 0)

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined >= 0)

// Strict Check
console.log("2" == 2)
console.log("2" === 2)
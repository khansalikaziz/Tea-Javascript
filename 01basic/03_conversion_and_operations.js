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

// console.log(stringNumber,typeof(stringNumber))

// **************   Operations  **************
let value = 3
let negValue= -value
//console.log(negValue)


let str1 = "hello"
let str2 = " Salik"
let str3 = str1+str2
// console.log(str3)

// console.log("1"+2+2)
// console.log(1 + 2 + "2")

// console.log(+true)
// console.log(+"")

let num1, num2, num3
num1= num2 = num3 = 2+2
console.log(num2);

let gameCounter = 100
++gameCounter
console.log(gameCounter);
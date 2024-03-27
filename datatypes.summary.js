// Primitive
  // 7 types : String,Number,Boolean, null , undefined ,Symbol,BigInt

const score= 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id,anotherId,id==anotherId)

const bigNumber=544554545n


// References type(Non-Primitive)
  // Array,Objects , Functions

const heros = ["Shaktiman","nagraj","doga"]
const userDetail={"name":"salik","age":21}

const myFun=function(){
    console.log("Hello World")
}
//console.log(typeof id)

// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack ,Heap

// Stack (used in Primitive type) -->We get copy of the variable from here
// Heap (used in Non Primitive type)--> We get reference of original value

let Youtubename = "Salik Aziz Khan"

let anothername = Youtubename
console.log(anothername)




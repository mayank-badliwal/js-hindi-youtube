// Primitive
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.57

const isLoggedIn = false
const outsideTemp = null
let userMail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 343556758948493n
// console.log(typeof(bigNumber))

// Refrence type(Non-primitive)
// Array, Objects, functions

//Array
const heros = ["shaktimaan", "naagraaj", "doga"]
// console.log(heros) 

//Objects
let myObj = {
    name: "mayank",
    age: 22,
    city: "chandpur"
}
// console.log(myObj)

//functions
const myFunc = function() {
    console.log("hello"); 
}

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
    Value                                       Type      

1.  String                                      "string"
2.  Number                                      "number"
3.  Null                                        "object"
4.  Boolean                                     "boolean"
5.  Object (native and 
    does not implement                          "object"
    [[Call]])	
6.  Object (native or
    host and does implement [[Call]])	        "function"
7.  Object (host and 
    does not implement [[Call]])	            Implementation-defined except may not be "undefined", "boolean", "number", or "string".
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (non-Primitive)
// all primitive values will store in Stack and non-Primitive will store in Heap

let myHomename = "Mayank"

let anotherName = myHomename
anotherName = "Kaae"

// console.log(myHomename);
// console.log(anotherName);

let userOne = {
    email: "userOne@yahoomail.com",
    upi: "userOne@ybl"
}

let userTwo = userOne

userTwo.email = "mayank@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);



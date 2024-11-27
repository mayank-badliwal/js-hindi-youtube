// let score = "33"        // it can be convert, because it is a pure number
// let score = "33abc"     //NaN = Not a Number
// let score = null        // 0
let score = undefined     // NaN

// console.log(typeof(score));
// console.log(typeof score);

// let scoreInNumber = Number(score)
// console.log(typeof scoreInNumber);
// console.log(scoreInNumber)  

/*
"33" => 33
"33abc" => NaN
true => 1, false => 0
null => 0
undefined => NaN
"mayank" => NaN
*/


let isLoggedIn = "mayank"
let isLoggedIninBoolean = Boolean(isLoggedIn)

// console.log(isLoggedIninBoolean)
/*
1 => true
0 => false
"" => false
"mayank" => true
*/

let Number = 70
let numberToString = String(Number)

console.log(numberToString)
console.log(typeof numberToString)
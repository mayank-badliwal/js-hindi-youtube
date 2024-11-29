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

// console.log(numberToString)
// console.log(typeof numberToString)

// ***************** OPERATIONS *****************

let posValue = 4;
let negValue = -posValue;
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%3)

// console.log("1" + 2);       //JS can convert number to string itself
// console.log(1 + "2");
// console.log("1" + 2 + 2);   //if string value is on starting so rest will be convert to string.
// console.log(1 + 2 + "2");   //if string value is on last so rest will not be convert to string, and it'll judge as it's own type.

// console.log(3 + ((4 * 5) % 3))

let gameCounter = 100;
++gameCounter
console.log(gameCounter);


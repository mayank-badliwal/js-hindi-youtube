const name = String("Mayank")
const repoCount = String(10)

console.log(`My name is ${name} and my repos are ${repoCount}`)

let gameName = new String('Mayank-Thakur-kumar-com')

// console.log(gameName[0]);

// console.log(gameName.length)    //length is not a function

// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('k'));

const string2 = gameName.substring(0, 7)
// console.log(string2)

const string3 = gameName.slice(4, -2)
// console.log(string3);

const string4 = "   Mayank  ";
console.log(string4);
console.log(string4.trim());

const url = "https://mayank.com/mayank%20kumar";
console.log(url.replace("%20", "-"))
console.log(url.includes('thakur'))     //includes() will check that it is available or not in string.

console.log(gameName.split('-'));       //split() will split a string like an array on the basis of something(-, +, space, etc.)








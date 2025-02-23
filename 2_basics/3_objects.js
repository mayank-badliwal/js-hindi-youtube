// singleton object
// object-create

const mySym = Symbol("key1")

// object literals
const jsUser = {
    name : "Mayank",
    "full name" : "mayank kumar",
    email : "mayank@google.com",
    [mySym] : "myKey01",
    age : 12,
    location : "Chandpur",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.name = "Shaurya"     // it is used to change the value of object

// Object.freeze(jsUser)       // it is used to stop any changes in objects values.
jsUser.age = 8
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello JS user")
}
console.log(jsUser.greeting())


jsUser.greeting = function() {
    console.log(`Hello JS user, ${this.name}`)
}
console.log(jsUser.greeting())
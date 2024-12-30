// Date = is an object

// 1. Today 
let myDate = new Date();

// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

//2. User defined
let myCreatedDate = new Date(2024, 12, 30)
// let myCreatedDate = new Date(2024, 12, 30, 5, 3)
// let myCreatedDate = new Date("2024-12-30")
// let myCreatedDate = new Date("12-30-2024")

// console.log(myCreatedDate.toLocaleString())


// 3. Timestamp
let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)     // in js months starts from 0.
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

// `${newDate.getDay()} and the Time is`

newDate.toLocaleString{'default',{
    weekday: "long",
    
}}

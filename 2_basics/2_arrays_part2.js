
const marvel = ["Thor", "IronMan", "SpiderMan"]
const dc = ["SuperMan", "BatMan", "Flash"]

//push() = Appends new elements to the end of an array, and returns the new length of the array.
// marvel.push(dc)
// console.log(marvel)

//Concat() = Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// const marvel_dc = marvel.concat(dc)
// console.log(marvel_dc)

//accessing any item from an array using 
// console.log(marvel_dc[5])

//Spread function 
// const marvel_dc2 = [...marvel, ...dc]
// console.log(marvel_dc2)

//flat() = Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const another_array = [1, 2, 3, [4, 5], 6, 7, [7, 8, [9, 10]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Mayank"))
console.log(Array.from("Mayank is a very good boy."))
console.log(Array.from({name: "Mayank"}))   //interesting case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
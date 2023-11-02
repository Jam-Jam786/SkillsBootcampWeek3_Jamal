// let myArray = ["monday", "Wednesday", "thursday", "friday"]
// // use splice to insert tuesday at the correct position

// myArray.splice(1, 0, "tuesday")

// console.log(myArray);

// myArray = myArray.concat("saturday", "sunday")

// console.log(myArray);

let stuff = ["apple", "orange", "peers"]

let randomIndex = Math.floor(Math.random() * stuff.length)

console.log(`random index : ${randomIndex}`);

stuff.splice(randomIndex, 0, "banana")

console.log(stuff)

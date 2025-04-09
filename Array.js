//Array 

const arr=[0,1,2,3,4,5,6,7] 
console.log(arr[1])

const myArr2 = new Array(1,2,3,4)
console.log(myArr2)


//Array methods

// myArr2.push(5) //Add new element of array end position
// myArr2.push(6)
// myArr2.pop() // Remove last element of array
// myArr2.pop()
// myArr2.unshift(0) //Add new element  start of Array
// myArr2.shift() // Remove first element of array


// console.log(myArr2.includes(9))
// console.log(myArr2.indexOf(8))

// console.log(myArr2)

const newArr = myArr2 .join()

console.log(myArr2);
// console.log( typeof newArr)

//slice ,splice


// console.log("A", myArr2)
// const myn1 = myArr2.slice(1,3)

// console.log(myn1)
// console.log("B",myArr2)

const myn2 = myArr2.splice(1,3)
// console.log("c",myArr2)
// console.log(myn2)


const m_heros =["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// m_heros.push(dc_heros)
// console.log(m_heros)

const   all_heros= m_heros.concat(dc_heros)
// console.log(all_heros);


const all_new_heros =[...m_heros,...dc_heros]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5,]]]

const r_array = another_array.flat(Infinity)
console.log(r_array)

console.log(Array.isArray("Baswaraj"))
console.log(Array.from("Baswaraj"))
console.log(Array.from({name:"Baswaraj"})) //interesting

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))
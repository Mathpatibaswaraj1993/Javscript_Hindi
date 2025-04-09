const name = "hitesh"

const repoCount = 60;
// console.log(name + repoCount + "Value")

console.log(` ${name} ${repoCount} + "Value"`)



const gameName= new String('Baswaraj')
// console.log(  gameName[0])
// console.log(  gameName.__proto__)
// console.log(gameName.length)
// console.log(  gameName.toUpperCase())
// console.log(  gameName.charAt('4'))



const newString =gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-7,4)
console.log(anotherString)

const newStringOne="    Baswaraj     "
console.log(newStringOne.trim())
console.log(newStringOne)


const url = "https://baswaraj.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))


console.log(gameName.split('_'))

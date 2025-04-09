//Dates

let mydate =  new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log( typeof mydate)


let createDate = new Date(2025, 2 ,23)
console.log(createDate.toDateString())
console.log(createDate.toLocaleString())

let createDate1 = new Date("01-14-2025")
console.log(createDate1.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createDate1.getTime())


let newDate = new Date()

// console.log(Date.now()/1000); 
// console.log(Math.floor(Date.now()/1000))
// console.log(newDate)
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(`${newDate.getDay()}`) 


newDate.toLocaleString('default',{
    weekday :"long"})

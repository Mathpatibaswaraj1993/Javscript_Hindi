const outsideTemp = null


let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const hero= ["shaktiman","naagraj","doga"]
console.log(hero);

 let NaN;
 console.log( typeof id)
 console.log( typeof hero)
 console.log( typeof userEmail)



 //+++++++++++++++++++++++++++++++++++++++++++++

 //Stack(primitive),Heap (Non-Primitive)


 let youtube = "dotcom"

 let Anothername = youtube
 Anothername="Javascript"
 console.log(youtube)
 console.log(Anothername)


 let user = {
    email :"usr@google.com",
    upi :"user@ybl"
 }

 let userTwo = user

 userTwo.email ="appa@gmail.com"
 console.log(user.email)
 console.log(userTwo.email)
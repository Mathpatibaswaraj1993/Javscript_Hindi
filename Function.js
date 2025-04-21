function sayMyName()
{
    console.log("B")
    console.log("A")
    console.log("S")
    console.log("W")
    console.log("A")
    console.log("R")
    console.log("A")
    console.log("J")
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }
// const result =addTwoNumbers(3,4) //arguments


function addTwoNumbers(num1,num2){
//    let result = num1 + num2
//    return result

return num1 + num2
}
const result =addTwoNumbers(3,4) //arguments

console.log(`Result:${result}`)


 function loginUserMessage(username = "sam"){
    if(!username){
       
        console.log("Please enter a username") 
        return
    }

    return  `${username} just logged in`
 }
 console.log(loginUserMessage("baswaraj"))



 function calculateCartPrice(val1,val2,...num1)
 {
    
    return `${val1},${val2},${num1}`;
 }

 console.log(calculateCartPrice(200,600,400,500))


 const user ={
    username:"Baswaraj",
    price:399
 }

 function handleObject(anyobject)
 {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
 }

//  handleObject(user)
 handleObject({
    username:"sam",
    price:399
 })



 const myNewArray =[200,400,100,600]

 function returnSecond(getArray){
   return getArray[0]
 }

 console.log(returnSecond([200,400,500,1000]))



  
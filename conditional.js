let temp =41;

if(temp != 41)
 {
    console.log("Less than 50");
 }
   else{
    console.log("temp is grater than 50")
   }
console.log("Execute")


const score = 200

if(score >100)
{
   const power = "fly"
   console.log(`user power:${power}`)
}

const  balance =1000

// if(balance > 500) console.log("test"),console.log("test2")

if (balance < 500){
   console.log("less than 500")
}else if(balance < 750)
{
   console.log("less than 750")
}else if(balance < 900){
   console.log("less than 900")
}else{
   console.log("less than 1200")
}

const userLoggedIn = true 
const debitCard = true
const userLoggedInFromGoogle = true
const userLoggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
   console.log("Allow to buy course")
}

if(userLoggedInFromGoogle || userLoggedInFromEmail){
   console.log("user logged in")
}




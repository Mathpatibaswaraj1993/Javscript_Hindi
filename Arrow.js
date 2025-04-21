const user ={
    username:"baswaraj",
    price:999,
    welcomeMess: function(){
     
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }


}

// user.welcomeMess()
// user.username="sam"
// user.welcomeMess()

// console.log(this)


// function chai(){
//     console.log(this)
// }

// chai()


// const chai = () => {
//     let username = "Baswaraj"
    // console.log(this)
// }
//  chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) =>
//      num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"Baswaraj"})


// console.log(addTwo(3,5))

// const myArray=[2,3,4,6,7]


//Immediately Invoked Function Expressions(IIFE)

(function chai1() {
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('baswaraj')
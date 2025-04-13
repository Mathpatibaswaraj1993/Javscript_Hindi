 //object literals
 const mysym = Symbol("key1")

 const JsUser ={
    name:"Baswaraj",
    age:18,
    mysym:"mykey1",
    Location:"Pune",
    isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
 }
console.log(JsUser.Location)
 console.log(JsUser["LastLoginDays"])

console.log(  JsUser[mysym])

JsUser.name="Mathpati"
console.log(JsUser)


JsUser.greeting = function()
{
    console.log("Hello Js User");
}

console.log(JsUser.greeting())

JsUser.greeting1 = function()
{
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting1())

// const tUser = new  Object() //singleton object

const tUser1 = {}
console.log(tUser1)

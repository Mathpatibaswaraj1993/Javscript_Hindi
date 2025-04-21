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
// console.log(JsUser.Location)
//  console.log(JsUser["LastLoginDays"])

// console.log(  JsUser[mysym])

JsUser.name="Mathpati"
// console.log(JsUser)


JsUser.greeting = function()
{
    console.log("Hello Js User");
}

// console.log(JsUser.greeting())

JsUser.greeting1 = function()
{
    // console.log(`Hello Js User ${this.name}`);
}

// console.log(JsUser.greeting1())

// const tUser = new  Object() //singleton object

const tUser1 = {}
// console.log(tUser1)


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"baswaraj",
            lastname:"mathpati"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 ={1:"a",2:"b"}
const obj2= {3:"a",4:"b"}


const obj3 ={obj1,obj2}
// console.log(obj3)

const target ={a:1,b:2}
const source ={b:4,c:5}

const retunedTarget = Object.assign(source,target)
// console.log(source);


// console.log(retunedTarget === source) 

const course={
    cousrsename:"Js in Hindi",
    price:"999",
    courseInstructor:"Baswaraj"
}

//
const {courseInstructor:instructor}=course
// console.log(courseInstructor)
console.log(instructor)



//json

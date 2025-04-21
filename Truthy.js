const userEmail =[]

if(userEmail){
    console.log("Got user Email")
}else{
    console.log("Don't have user email")
}

//falsy Values

// false, 0, -0, BigInt, 0n,"",null,undefined,Nan

//Truthy values

// "0", 'false'," ",[],{},function(){}


if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ){
    console.log("object is empty")
}


//Nullish  coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)


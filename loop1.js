//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5)
    {
        // console.log(" 5 is the best number")
    }
    // console.log(element);

}


for (let i = 0; i <=  10; i++) {
    // console.log(`outer loop value:${i}`)
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner loop value :${j} and inner loop :${i}`)
        // console.log(i + '*'+ j + ' = ' + i*j )
    }
    
}

let myArray = ["flash","batman","superman"]

console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}



//break and continue

// for (let index = 1; index <= 20; index++) {
//    if(index == 5) {
//     console.log(`Detected 5`)
//     break
//    }    
//    console.log(`Value of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
   if(index == 5) {
    console.log(`Detected 5`)
    continue
   }    
   console.log(`Value of i is ${index}`);
}

        //while

        let index =1
        while(index <= 10){
            console.log(`Value of index is ${index}`)
            index = index + 4;
        }


        let myarray1 = ['flash','batman','superman']

        let arr = 0
        while(arr < myarray1.length){
                console.log(`value is ${myarray1[arr]}`)
                arr = arr + 1;
        }


           // do while

           let score = 11

           do {
            console.log(`score is ${score}`)
            score++
           }while(score <=10)

          //  For of 

        //   ["","","",]

        [{},{},{}]

        const arr1 = [1,2,3,4,5]
        for(const num of arr1){
            // console.log(num)
        }
        for(let num1 of arr1){
            // console.log(num1)
        }



        const greeting = "Hello World"

        for(const i of greeting){
           
            console.log(`Each char is ${i}`)
        }


        //Maps

        const map = new Map()
        map.set('IN',"india")
        map.set('USA',"United States of America")
        map.set('FR',"France")
        map.set('IN',"India")

        // console.log(map);

        for (const [i,value] of map){
            console.log(i, ':-', value);
        }


        // const myobject = {
        //     'game1':'NFS',
        //     'game2':'Spiderman'
        // }

        // for (const [key, value] of myobject){
        //     console.log(key, ':-',value)
        // }


        const myobject = {
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
    py:'Python',    
    java:'Java',
    csharp:'C#',
    php:'PHP',
    go:'Go',
    swift:'Swift BY Apple',
    kotlin:'Kotlin',

}

for (const key in myobject) {

    // console.log(`${key}  shortcut is for  ${myobject[key]}`);
    // console.log(key)
}


const programming = ["js","cpp","rb","py","java","csharp","php","go","swift","kotlin"]      

for (const key in programming) {
    // console.log(programming[key]);
    // console.log(programming[key]);
}

const coding = ["Js","ruby","Java","Python","Cpp"]
// using forEach
coding.forEach(function (item){
    // console.log(item);
})

// using forEach Arrow function
// coding.forEach((i)=>{
//     console.log(i)
// })

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)



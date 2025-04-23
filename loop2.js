const coding = ["Js","ruby","Java","Python","Cpp"]

// const values = coding.forEach((i)=>{
//     // console.log(i)
//     return i
// })

// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]

//  const newNums= myNums.filter((num)=>num > 4)
//   console.log(newNums)

//when using scope then using return keyword
const newNums = myNums.filter((num)=>{
    return num > 4
})

console.log(newNums)




const books = [
    {
      title: "The Silent Voyager",
      genre: "Science Fiction",
      publish: 2018,
      edition: "First"
    },
    {
      title: "Whispers of the Past",
      genre: "Historical Fiction",
      publish: 2020,
      edition: "Second"
    },
    {
      title: "Echoes in the Code",
      genre: "Tech Thriller",
      publish: 2023,
      edition: "First"
    },
    {
      title: "The Last Ember",
      genre: "Fantasy",
      publish: 2015,
      edition: "Third"
    },
    {
      title: "Midnight Algorithms",
      genre: "Mystery",
      publish: 2019,
      edition: "First"
    },
    {
      title: "Canvas of Dreams",
      genre: "Romance",
      publish: 2021,
      edition: "Second"
    },
    {
      title: "Voices Beyond Time",
      genre: "Philosophical",
      publish: 2017,
      edition: "First"
    }
  ];

  const userbook =books.filter((bk)=>bk.genre === "Fantasy")

   userbook1 = books.filter((i)=>{
    return i.publish >=2015  && i.genre === "Fantasy"


})
  console.log(userbook1)



  const num1 =[1,2,3,4,5,6,7,8,9,10]

//   const newnum = num1.map((num1) => num1 + 10)

const newnums1 = num1
               .map((num)=> num * 10)
               .map((num)=> num + 1)
               .filter((num) => num >= 40)
  console.log(newnums1)



  const array1 = [1,2,3,4,5];

  //0 + 1  2 + 3 + 4 + 5

  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (accumulator , currentValue)=> accumulator + currentValue,
    initialValue
  );

  // console.log(sumWithInitial); // Output: 15


const mynum = [1,2,3]
 
const myTotal = mynum.reduce(function (acc,currVal) {
  console.log(`acc:${acc} and currVal: ${currVal}`);
  return acc + currVal
} ,0)

// console.log(myTotal);


const myTotal2 = mynum.reduce((acc,currVal) => acc + currVal ,0)
console.log(myTotal2);



const shoppingCart = [
{
  itemName:"Shirt",
  price: 20
},
{
  itemName:"Pants",
  price: 30
},
{
  itemName:"Shoes",
  price: 50
},
{
  itemName:"Hat",
  price: 15
},
{
  itemName:"Socks",   
  price: 5    
},
{
  itemName:"Belt",
  price: 25
},
{
  itemName:"Jacket",
  price: 60
},
{
  itemName:"Scarf",
  price: 10
},
{
  itemName:"Gloves",
  price: 8
},
{
  itemName:"Sweater",
  price: 40
},
{
  itemName:"Shorts",
  price: 35
},
{
  itemName:"T-shirt",
  price: 12
},
{
  itemName:"Skirt",
  price: 28
},
{
  itemName:"Dress",
  price: 45
},
{
  itemName:"Flip-flops",
  price: 18
},
{
  itemName:"Raincoat",
  price: 55
},
{
  itemName:"Umbrella",
  price: 22
},
{
  itemName:"Backpack",
  price: 70
},
{
  itemName:"Sunglasses",
  price: 14
},
{
  itemName:"Watch",
  price: 80
},
{
  itemName:"Wallet",
  price: 30
}
  
]

 const PriceToPay= shoppingCart.reduce((acc,item) =>acc + item.price ,0) 

 console.log(PriceToPay);
console.log(shoppingCart.length);  
console.log(shoppingCart[0].itemName);
console.log(shoppingCart[0].price);
// console.log(shoppingCart[1].itemName); 
// console.log(shoppingCart[1].price);
// console.log(shoppingCart[2].itemName);
// console.log(shoppingCart[2].price);
// console.log(shoppingCart[3].itemName); 
// console.log(shoppingCart[3].price);


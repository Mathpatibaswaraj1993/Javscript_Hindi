// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');
const id1 = document.getElementById('gray').addEventListener("click",(e)=>{
  console.log("click");
  document.body.style.backgroundColor="gray"
  
})
const id2 = document.getElementById('yellow').addEventListener("click",(e)=>{
  console.log("click");
  document.body.style.backgroundColor="yellow"
  
})
const id3 = document.getElementById('white').addEventListener("click",(e)=>{
  console.log("click");
  document.body.style.backgroundColor="white"
  
})
const id4 = document.getElementById('blue').addEventListener("click",(e)=>{
  console.log("click");
  document.body.style.backgroundColor="blue"
  
})



// buttons.forEach(function (button) {
//   button.addEventListener('click', function(e) {
//     const color = e.target.id.toLowerCase();
//     if (["gray", "white", "blue", "yellow"].includes(color)) {
//       body.style.backgroundColor = color;
//     }
//   });
// });

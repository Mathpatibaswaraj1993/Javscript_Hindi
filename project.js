const buttons = document.querySelectorAll('.button')
console.log(buttons)

const body = document.querySelector('body')

buttons.forEach((button) => {
  console.log(button) 
  button.addEventListener('click', function(e) {
    // console.log('Button clicked')
    console.log(e.target);
    // console.log(e);

    if(e.target.id === 'gray'){
        body.style.backgroundColor = e.target.id;
    }

    // if(e.target.id === "white"){
    //     body.style.backgroundColor = e.target.id;
    // }

    // if(e.target.id === "blue"){
    //     body.style.backgroundColor = e.target.id;
    // }

    // if(e.target.id === "Yellow"){
    //     body.style.backgroundColor = e.target.id;
    // }

  })  
})
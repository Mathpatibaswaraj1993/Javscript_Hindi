const form = document.querySelector('bmiForm')



  
// const weight = parseFloat(document.getElementById('#weight').value);
// const height = parseFloat(document.getElementById('#height').value);
// const results = document.getElementById('result');

  const button= document.getElementById('btn')



  button.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const results = document.getElementById('result');
    // console.log(weight, height); 
  console.log("welcome to BMI calculator")
  // console.log(weight, height);
  


  if(height === '' || height < 0 || isNaN(height)){
   results.innerHTML = `Please give a valid height:${height}`
  }
   else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid Weight:${weight}`
   }
   else {
    const bmi = (weight / ((height/100)).toFixed(2))
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
   }
  })


    
     


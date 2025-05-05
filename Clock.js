const clock1 = document.getElementById('clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock1.innerHTML = date.toLocaleTimeString();
}, 1000)

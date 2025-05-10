const promiseOne = new Promise(function (resolve, reject) {
    //DO an async task
    //DB Calls, cryptography, network

    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log("Promise Consumed");

})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");

})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", emial: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "baswraj", password: "123" })
        } else {
            reject('ERROR:something went wrong')
        }
    }, 1000);
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.password
    })
    .then((password) => {
        console.log(password);

    })
    .catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        } else {
            reject('ERROR:JS went wrong')
        }
    }, 1000);
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }

}
consumePromiseFive()



async function getAllUsers() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/cricScore?apikey=%APIKEY%")
        // console.log(response);

        const data = await response.json()
        console.log(data);  
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUsers()

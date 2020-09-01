//Synchronous code = code that's executed one at a time
console.log('one')
console.log('two')
longFunc()
console.log('three')
//prints in order, doesn't matter how long lonFunc takes, then it prints 3
function longFunc(){
    let x = 5;
    for(let i=0; i<500000000; i++){
        x = i^10
    }
    console.log('long task done')
}

//JS is single threaded (only one call stack, does one thing at a time)
//Can do async code because it Js doesn't run in background, it runs in the browser like the DOM, ability to make a network call, setTimeout which is a feature of the browser
//Synchronous code is placed on call stack
//Async is possible because there is a thing called the 'callback queue'




// console.log(1)
// console.log(2)
// setTimeout(printHello, 0)
// console.log(3)

// function printHello(){
//     console.log('hello')
// }

//prints 1, 2, 3, hello
//setTimeOut is a function that gives a function to a browser web api, it runs really quickly and hands over the function passed in as an argument to the browser web api and tells it to wait a certain amount of milliseconds
//There's a rule that everything that goes through the browser web api has to go through a callback queue and it sits there and waits
//While it is waiting it continues on adds the last console.log to the call stack
//The callback queue gets processed when the call stack is completely empty and we've run through all of our code (or after we've run through all of synchronous commands)
//After that then commands from the callback queue can be added to the call stack



//'https://api.spacexdata.com/v3/launches/latest'
//Write a function that calls the above api and displays it

//use request library
// let request = require('request');

// request('https://api.spacexdata.com/v3/launches/latest', function(error, response, body){
//   if(error){
//     console.log(error)
//   } else {
//   const responseData = JSON.parse(body)
//   const rocketId = responseData.rocket.rocket_id;
    
//     request('https://api.spacexdata.com/v2/rockets/' + rocketId, function(error, response, body) {
//       if(error) {
//         console.log(error)
//       } else {
//         const rocketData = JSON.parse(body)
//         const payloads = rocketData.payload_weights;
        
//         for(let i=0; i<payloads.length;i++){
//           request('https://api.spacexdata.com/v2/payloads/' + payloads[i].id, function(error, response, body) {
//             if(error) {
//                 console.log(error)
//             } else {
//               const payloadData = JSON.parse(body)
//               console.log(respsonseData.flightId, rocketData.rocketId, payloadData)
//             }
//          })
//         }
//         }
//     });
//   }
// });

//The above is an example of callback hell (too many callbacks nested inside one another)
//Can use promises to overcome this


// const _fetch = require('isomorphic-fetch');
// //this library works with promises instead of callbacks

// _fetch('https://api.spacexdata.com/v3/launches/latest')
// .then(res => res.json()) //once the promise resolves then it runs this line
// //promises allow chaining and as long we keep returning a promise we can chain .then
// .then(data => {
//     const rocketId = data.rocket.rocket_id;

//     return _fetch('https://api.spacexdata.com/v2/rockets/' + rocketId)
// })
// .then(res => res.json())
// .then(data => console.log(data))//gives us rocket data 
// .catch(err => console.log(err)) //handles errors anywhere inside the promise( starting from line 84 on down)
// //We can replace all those nested callbacks with chained promises


//Creating your own promises
// const myPromise = new Promise(function(resolve, reject){
//     resolve('promise is done')
// })
// console.log('1')
// myPromise.then(data => console.log(data));
// console.log('2')
//This shows that it's running data asynchronously because promise is done comes in at the end. If it was running sychronously then promise is done would've been printed after 1


const myPromise1 = new Promise(function(resolve, reject){
    resolve('promise 1')
})
const myPromise2 = new Promise(function(resolve, reject){
    resolve('promise 2')
})
console.log('1')
setTimeout(()=> console.log('setTimeOut'), 0)
myPromise1.then(data => console.log(data));
myPromise2.then(data => console.log(data));
console.log('2')
//1
//2
// promise 1
// promise 2
// setTimeOut

//A new queue is present => microtask queue
//We also still have the callback (task) queue
//Promises don't go in callback queue, they go in the microtask queue
//After synchronous code is finished, then we go to microtask queue (so the promises go first) then we go to the callback queue (the timeout)

//Callbacks and promises are two ways we have to handle asynchronous behavior in Js
//Another way of writing a promise => aysnc/await 

async function getData() {
    const response = await _fetch('https://api.spacexdata.com/v3/launches/latest')//Js will fetch the api call and it sees the await so it's going to wait before running the next line of code
    const data = await response.json() // sees the await and waits for the response.json to resolve before running next line
    console.log(data)
}
// Rework the following code using pure functions as much as possible.
//Pure functions have 
//1: a return vale
//2: same input produces the same output
//3: no side effects (not changing anything outside of it's scope, not updating any variables,)

let balance = 1000;

function takeMoneyOut(amount) {
    return balance - amount
}
let finalMoneyOut = takeMoneyOut(10)
console.log("You have:", finalMoneyOut)


function addMoney(amount) {
    return balance + amount
}
let finalAdded = addMoney(10)
console.log("You have:", finalAdded)


function isEnough() {
    if(balance > 1500) {
        return true
    } else {
        return false
    }
}
console.log(isEnough())




//Original 

// let balance = 1000;

// function takeMoneyOut(amount) {
// balance-=amount;
// console.log('You have: ', balance);
// }


// function addMoney(amount) {
// balance+=amount;
// console.log('You have: ', balance);
// }


// function isEnough() {
// if(balance > 1500) {
// console.log('You have enough for the trip!');
// } else {
// console.log('You do not have enough for the trip!');
// }
// }
// // new Promise()  -> gives error as "Uncaught TypeError: Promise resolver undefined is not a function"

// // ----------------------------

// // Creating the Promise with assigning to a variable:
// // const myFristPromise = new Promise();  // -> But, Promise constructor excepts a function


// // ----------------------------
// // Creating the Promise with function:
// const myExecutor = function() {

// }

// const myFristPromise2 = new Promise(myExecutor);


// // ----------------------------
// // using RESOLVE:
// const myExecutor2 = function(a,b) {
//   a('Resolved');    // First parameter of the function should RESOLVE
//   b('Rejected');    // Second parameter of the function should REJECT
// }

// const myFristPromise3 = new Promise(myExecutor2);  
// // Promise automatically turning the parameters of the function as Resolve and Reject

// console.log(myFristPromise3);   // Promise {<fulfilled>: "Resolved"}
// // But, if there is resolve and reject and there is no condition, then RESOLVE will work.


// // ----------------------------
// // using REJECT:
// const myExecutor3 = function(resolve,reject) {
//   // resolve('Resolved');    
//   reject('Rejected');    
// }

// const myFristPromise4 = new Promise(myExecutor3);  

// console.log(myFristPromise4);   
// // Promise {<fulfilled>: "Rejected"}
// // Uncaught (in promise) Rejected


// // ----------------------------
// // Promise with condition
// const myExecutor4 = function(resolve,reject) {
//   const isLoggedIn = false;
//   if(isLoggedIn) {
//     resolve('Successfully logged in!');
//   } else {
//     reject('User is NOT logged in!');
//   }   
// }

// const myFristPromise5 = new Promise(myExecutor4);  
// console.log(myFristPromise5);   
// // Promise {<rejected>: "User is NOT logged in!"}
// // Uncaught (in promise) User is NOT logged in!



// // ==================================================
// // SET TIMOUT:
// // setTimeout('Hello world', 2000);  // INVALID CALLBACK


// // ------------------------
// // using with function:
// const greet = function () {
//   console.log('Hello world');
// }

// setTimeout(greet, 2000);  // -> Hello world -> After 2 sec


// // ------------------------
// // with PROMISE:
// const executorFunction = function(resolve,reject) {
//   setTimeout(() => {
//     resolve('I resolved 3 seconds later');
//   }, 3000);  
// }

// const myPromise = new Promise(executorFunction);  
// console.log(myPromise);   



// // =====================================
// // THEN:
// const executorFunction2 = function(resolve,reject) {
//   setTimeout(() => {
//     resolve('I resolved 3 seconds later');
//   }, 3000);  
// }

// const myPromise2 = new Promise(executorFunction2);  

// const handleSuccess = function() {
//   console.log('Wooooohooooooo! It worked');
// }

// myPromise2.then(handleSuccess);
// // Wooooohooooooo! It worked  -> After 3 seconds

// // -------------------------
// // with RESOLVE value;
// const executorFunction3 = function(resolve,reject) {
//   setTimeout(() => {
//     resolve('I resolved 3 seconds later');
//   }, 3000);  
// }

// const myPromise3 = new Promise(executorFunction3);  

// const handleSuccess2 = function(resolveMessage) {
//   console.log(resolveMessage);
// }

// myPromise3.then(handleSuccess2);
// // I resolved 3 seconds later -> After 3 seconds


// // -------------------------
// // with ONFULFILLED and ONREJECTED:
// const executorFunction4 = function(resolve,reject) {
//   setTimeout(() => {
//     if(false) {
//       resolve('I resolved 3 seconds later');
//     } else {
//       reject('I rejected 3 seconds later');
//     }
//   }, 3000);  
// }

// const myPromise4 = new Promise(executorFunction4);  

// const handleSuccess3 = function(resolveMessage) {
//   console.log(resolveMessage);
// }

// const handleFailure = function(rejectMessage) {
//   console.log(rejectMessage);
// }

// myPromise4.then(handleSuccess3, handleFailure);
// // I rejected 3 seconds later -> after 3 sec


// // -------------------------
// // use 2nd then() method without using catch() method:
// const executorFunction5 = function(resolve,reject) {
//   setTimeout(() => {
//     if(false) {
//       resolve('I resolved 3 seconds later');
//     } else {
//       reject('I rejected 3 seconds later');
//     }
//   }, 3000);  
// }

// const myPromise5 = new Promise(executorFunction5);  

// const handleSuccess4 = function(resolveMessage) {
//   console.log(resolveMessage);
// }

// const handleFailure2 = function(rejectMessage) {
//   console.log(rejectMessage);
// }

// myPromise5
//   .then(handleSuccess4)
//   .then(null, handleFailure2);
// // I rejected 3 seconds later -> after 3 sec


// =====================================
// CATCH:
const executorFunction6 = function(resolve,reject) {
  setTimeout(() => {
    if(false) {
      resolve('I resolved 3 seconds later');
    } else {
      reject('I rejected 3 seconds later');
    }
  }, 3000);  
}

const myPromise6 = new Promise(executorFunction6);  

const handleSuccess5 = function(resolveMessage) {
  console.log(resolveMessage);
}

const handleFailure3 = function(rejectMessage) {
  console.log(rejectMessage);
}

myPromise6
  .then(handleSuccess5)
  .catch(handleFailure3);
// I rejected 3 seconds later -> after 3 sec


// =====================================
// CHAINING MULTIPLE PROMISES:

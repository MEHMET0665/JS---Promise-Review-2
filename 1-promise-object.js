const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// 1 - 
const executorFunction = function(resolve, reject) {
  if(inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
}

const inventoryPromise = new Promise(executorFunction);
console.log(inventoryPromise);
// Promise {<fulfilled>: "Sunglasses order processed."}

// 2 -
const orderSunglasses = function() {
  return new Promise(executorFunction);
}

console.log(orderSunglasses());
// Promise {<fulfilled>: "Sunglasses order processed."}


// 3 -
const orderPromise = orderSunglasses();
console.log(orderPromise);
// Promise {<fulfilled>: "Sunglasses order processed."}
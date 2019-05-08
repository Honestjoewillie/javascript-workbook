'use strict';

const assert = require('assert');

// function forEach(arr, callback) {
//   // Your code here
// }
const arr = [10, 20, 30];
function map(arr, callback) {
  // Your code here
  let newArray = [];
  for (let i = 0; i<arr.length; i++){
    let elements = callback(arr[i]);
    newArray.push(elements);
  }
  return newArray;
}
const mapIt = map(arr, function(n){
  n =n*2;
  return n;
})
console.log(mapIt);


const checkObject = [{price: 10},{price: 20},{price: 30}];
const checkArray = [10, 20, 30];
function reduce(array, accumulator) {
    accumulator = accumulator || 0;
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] == 'number') {
            accumulator = accumulator + array[index];
        } else if(typeof array[index] == 'object') {
            for(let i in array[index]){
                accumulator = accumulator + array[index][i];
            }
        }   
    }
    return accumulator;
}
const sum = reduce(checkArray, 10); // Set accumulator to 10
console.log("ANSWER: ",sum);

const sum2 = reduce(checkObject, 10);
console.log(sum2);

// const checkObject = [{price: 10},{price: 20},{price: 30}];
// const checkArray = [10, 20, 30];
function filter(array, callback, thisObject) {
  let filteredArray = [];
  let filterCallback = callback;
  if (thisObject) {
      filterCallback = callback.bind(thisObject);
  }
  for (let index = 0; index < array.length; index++) {
      if(typeof array[index] == 'number') {
          if (filterCallback(array[index], index, array)) {
              filteredArray.push(array[index]);
          }
      } else if(typeof array[index] == 'object') {
          for(let i in array[index]){
              if (filterCallback(array[index][i], index, array)) {
                  filteredArray.push(array[index][i]);
              }
          }
      }   
  }
  return filteredArray;
}
const mus = reduce(checkObject);
console.log("Answer:", mus);


console.log(sum2);

if (typeof describe === 'function') {
  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], 0);
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}



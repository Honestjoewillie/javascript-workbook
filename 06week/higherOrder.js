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
  console.log(map);
}
const mapIt = map(arr, function(n){
  n =n*2;
  return n;
})
console.log(mapIt);

const food = [
  {apple: 50},
  {pizza: 10},
  {pie: 20}
];
let newFoodArray = [];
for(let index = 0; index < food.length; index++){
  for(let i in food[index]){
    newFoodArray.push(food[index][i]);
  }
}
const sum1 = newFoodArray.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
}, 0)
const yep = sum1.toString().split();
console.log(yep);

const numbers = [50, 10, 20].reduce(function(result, item){
  return result + item;
}, 0);
const final = numbers.toString().split();
console.log(final);

const foodTwo = [
  {apple: 40},
  {pizza: 17},
  {pie: 2}
];
let newFoodArrayTwo = [];
for(let index = 0; index < foodTwo.length; index++){
  for(let i in foodTwo[index]){
    newFoodArrayTwo.push(foodTwo[index][i]);
  }
}
const sum2 = newFoodArrayTwo.filter(function(num){
  return num % 2 === 0;
});

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
      const reduced = reduce([1, 2, 3], (acc, num) => {
        return acc + num;
      });
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
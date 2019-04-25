'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(moveFrom, moveTo) {
  // Your code here
  let start = moveFrom.pop();
  moveTo.push(start);

}

function isLegal(moveFrom, moveTo) {
  // Your code here
let moveFromAaray = stacks[moveFrom];
let moveToAaray = stacks[moveTo];
if (moveFromAaray[moveFrom.length -1] > moveToAaray[moveTo.length -1]) {
   return false;
 }
 else {
   return true;
 }
}

function checkForWin() {
  let stackA = stacks.a;
  let stackB = stacks.b;
  let stackC = stacks.c;
  if (stackA.length == 0 && (stackB.length == 4 || stackC.length == 4)){
    return true;
  }
  else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  let moveFrom = stacks[startStack];
  let moveTo = stacks[endStack];
  movePiece(moveFrom, moveTo);
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
      towersOfHanoi('b', 'c'); //new test added by joe
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [], c: [1] }); //new test added by joe
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true); //new test added by joe
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'b'), true);//new test added by joe
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [], b: [], c: [4, 3, 2, 1]} //new test added by me
      assert.equal(checkForWin(), true); //new test added by me
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}

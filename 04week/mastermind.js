'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  //my code here
  //corretLetterLocations = 
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  let correctLetterLocations = 0;
  for (let i = 0; i < 4; i++){ //loops through solution and guess
    if (solutionArray[i] === guessArray[i]) { //looks to see if any of the guesses match the solution letter&locatuion
      correctLetterLocations++; //if any do increase the correctLetterLocatins by 1
      solutionArray[i] = null; //any that match mark as NULL in the solution.
      //this way they are not tracked when we want to see if there are matching letters NOT in correct location
    }
  }
  let correctLetters = 0; //will be used to see how many correct letters match
   for (let i = 0; i < 4; i++){
     let targetIndex = solutionArray.indexOf(guessArray[i]);
     if (targetIndex > -1) { //compares soution to guess and marks correct letters if any 
      correctLetters = correctLetters +1; //increase the count of correct letters
      solutionArray[targetIndex] = null; //again getting rid of any of those letters in the array
    }
  }
  return correctLetterLocations + "-" + correctLetters;
}

function addGuessHint(guess){ //I feel this is wrong
  //trying to solve step 9(Spec 3-add guess and hint to the board)
  let hint = generateHint(guess);
  board.push(hint);
}

function mastermind(guess) { 
  //my code here
  if (guess.length === 4 && guess !== solution){
    generateHint(guess);
  }
  else if (solution === guess) {
    return "You guessed it!";
  }
  if (guess > board.length){
    return "You ran out of turns! The solution was " + solution;
  }else if (guess.length < 4){
    return "Must type 4 letters"
  }

  else {
    addGuessHint(guess);
    return "Guess again."
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}

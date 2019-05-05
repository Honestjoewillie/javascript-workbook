'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color){
    if (color === 'white'){
      this.symbol = '○';
    }
    else if (color === 'black'){
      this.symbol = '●';
    }
  }
}


class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  createCheckers(){
    const white = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ]
    const black = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ]
    for (let i = 0; i<12; i++){
      let corordinate = white[i];
      let row = corordinate[0];
      let column = corordinate[1];
      this.grid[row][column] = new Checker("white");
      this.checkers.push(this.grid[row][column]);
    }
    for (let i = 0; i<12; i++){
      let corordinate = black[i];
      let row = corordinate[0];
      let column = corordinate[1];
      this.grid[row][column] = new Checker("black");
      this.checkers.push(this.grid[row][column]);
    }
  }
  selectChecker(row, column){
      return this.grid[row][column];
  }
  killChecker(position){
    let checkerToKill = selectChecker(position[0], position[1]);
    let indexChecker = this.checkers.indexOf(checker);
    this.checkers.splice(indexChecker, 1);
    this.grid[position[0]][position[1]] = null;
    if(checkerToKill){
      return;
    }
    // for (let i = 0; i<this.checkers.length; i++){
    //   if(checkerToKill == this.checkers[i]){
    //     this.checkers.splice(i, 1);
    //     this.grid[position[0]][position[1]] = null;
    //     break;
    //   }
    // }
  }
}


class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }
  moveChecker(start, end){ //start and end each contain a ROW & Column ex: [50, 41]
    const startRow = parseInt(start[0]);
    const startColumn = parseInt(start[1]);
    const endRow = parseInt(end[0]);
    const endColumn = parseInt(end[1]);

    const checker = this.board.selectChecker(start[0], start[1]);

    this.board.grid[ endRow ][ endColumn ] = checker;
    this.board.grid[startRow][startColumn] = null;

    // if (Math.sqrt((endRow - startRow)^2 + (endColumn - startColumn)^2) >= 2){
    //   this.board.killChecker([(endRow + startRow) / 2, (endColumn + startColumn) / 2]);
    // }
    if(Math.abs(endRow - startRow) === 2) {
      // To find the coordinates of the jumped piece,
      // If source row coordinate minus the desination row is a positive number, (moving down the board),
          // add 1 to the first source coordinate and assign it to the first coordinate of the jumped checker
      // else (moving up the board)
          // add 1 to the first source coordinate and assign it to the first coordinate of the jumped checker
      let killRow = endRow - startRow > 0 ? startRow + 1 : endRow + 1
      // If source row coordinate minus the desination row is more than 0, (moving down the board),
      // assign the jumped row number to the second coordinate of the jumped checker
      let killCol = endColumn - startColumn > 0 ? startColumn + 1 : endColumn + 1
      // Reassign a NULL value to the coordinates of the jumped checker
      this.board.grid[killRow][killCol] = null;
      this.board.checkers.pop();
  }
    // let startRow = start.substring(0, 1);
    // let startColumn = start.substring(1, 2);
    // let endRow = end.substring(0, 1);
    // let endColumn = end.substring(1, 2);
    // let checker = this.board.selectChecker(startRow, startColumn);
    // this.board.grid[startRow][startColumn] = null;
    // this.board.grid[endRow][endColumn] = checker;
    
    // if(Math.abs((startRow) - (endRow)) === 2){
    //   this.board.killChecker([(startRow + endRow) /2, (endRow + startRow )/ 2]);
    // }
    
    // else if(Math.abs((endRow) - (startRow)) == 2){
    //   this.board.killChecker(([endRow + startRow]) );
    // }
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}

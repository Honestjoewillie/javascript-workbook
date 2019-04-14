'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//new code
/*function translatePigLatin(str){
  //this finds the first vowel in the string put in
  //const firstVowel = str.match(/[aeiou]/);
  //this finds the index value of the first Vowel
  //const firstPosition = str.indexOf(firstVowel);
//this first position starts with 0 then it does NOT start with a vowel

const firstPosition = findFirstVowelPosition(str);
  if (firstPosition > 0){
    //slice gets you everything from where the vowel is left
    //slice that part off and put it to the end and ad ay.
    return str.slice(firstPosition) + str.slice(0, firstPosition) + "ay";
  }
  return str + "yay";
  }
  function findFirstVowelPosition(str){
    for (var i=0; i < str.length; i++){
      if ("aeiou".indexOf(str[i]) !== -1){
        return i;
      }
    }
  }*/
  
  


function pigLatin(word) {

//const words = wordword.toLowerCase().trim().split(' ');  
//for(var i=0;i<word.length;i++){

const word = sentence.toLowerCase().trim();

const vowels = ["a", "e", "i", "o", "u"];
//find if the first letter is a vowel
let vowelIndex = 0;
//if a vowel add "yay" to the end
if (vowels.includes(word[0])){
  return word + "yay";
}
//if cons add "ay"
else{ 
  for (let i of word){
    if (vowels.includes(i)){
      vowelIndex = word.indexOf(i);
      break;
    }
  }
  return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
}
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it('Should separate two words and return them together', () => {
      assert.equal(pigLatin('Hello there'), 'ellohay heretay');
      assert.equal(pigLatin('What now'), 'atwhay ownyay');
    });
  });
} else {

  getPrompt();

}

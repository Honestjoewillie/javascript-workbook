'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Andrew Code starts here:
// const vowelsAsArray = ['a', 'e', 'i', 'o', 'u'];
// const pigLatin = (word) => {
//   if (validation(word)){
//     word = convert(word);
//     let englishWord = word;
//     englishWord = word.split('');
//     if (vowelsAsArray.includes(word[0])){
//       return word += 'yay';
//     }
//     else {
//       for (let i = 0; i < englishWord.length; i++) {
//         if (!vowelsAsArray.includes(word[i])) {
//           englishWord.push(englishWord.shift());
//         }
//         else{
//           englishWord.push('ay');
//           return englishWord.join('');
//         }
//       }
//     }
//   }
//   else{
//     return console.log('Bad Input, Yo!');
//   }
// }
// const validation = (word) =>{
//   if (typeof word === 'string'){
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// const convert = (word) =>{
//   const trimmedWord = word.trim();
//   const convertedWord = trimmedWord.toLowerCase();
//   return convertedWord;
// }

  
  


function pigLatin(word) {
//const words = wordword.toLowerCase().trim().split(' ');  
//for(var i=0;i<word.length;i++){
word = word.toLowerCase().trim().split(' ');

//new array of pig latin words
const pigWords = [];
//loop through array of words to translate each word into pig latin
for (let i = 0; i < word.length; i++) {

  const vowels = ["a", "e", "i", "o", "u"];
  //find if the first letter is a vowel
  let vowelIndex = 0;
  //if a vowel add "yay" to the end
  if (vowels.includes(word[i][0])){
    console.log(i, word[i]);
    //calling on pigWords array, and adding if statement results to the end
    pigWords.push(word[i] + "yay");
  }
  //if cons add "ay"
  else { 
    for (let j of word[i]){
      if (vowels.includes(j)){
        vowelIndex = word[i].indexOf(j);
        console.log(i, word[i]);
        break;
      }
    }
    pigWords.push(word[i].slice(vowelIndex) + word[i].slice(0, vowelIndex) + "ay");
  }
}
const results = pigWords.join(' ');
  return results;
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

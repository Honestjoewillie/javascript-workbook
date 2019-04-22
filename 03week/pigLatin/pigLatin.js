'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

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

  
  


window.onload = function () {
  function pigLatin(word) {
  //takes the word(user input) puts to lower case, trims and splits
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
      //console.log(i, word[i]);  <---removed for my HTML
      //calling on pigWords array, and adding if statement results to the end
      pigWords.push(word[i] + "yay");
    }
    //if consonant add "ay"
    else { 
      for (let j of word[i]){
        if (vowels.includes(j)){
          vowelIndex = word[i].indexOf(j);
          //console.log(i, word[i]);
          break;
        }
      }
      pigWords.push(word[i].slice(vowelIndex) + word[i].slice(0, vowelIndex) + "ay");
    }
  }
  const results = pigWords.join(' ');
    return results;
  }

  //this is for terminal only/NODE
  // function getPrompt() {
  //   rl.question('word ', (answer) => {
  //     console.log( pigLatin(answer) );
  //     getPrompt();
  //   });
  // }
  //this should be what is linking my javascript to my html
    document.getElementById('english').onsubmit = function () {
    document.getElementById('text').value = pigLatin(document.getElementById('text').value);
    return false;//I think this return is to stop a page from reloading and not showing the translation
  }
    document.getElementById('refresh').onclick = function fresh() {
    document.getElementById('text').value = "";
  }
}
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//     it('Should separate two words and return them together', () => {
//       assert.equal(pigLatin('Hello there'), 'ellohay heretay');
//       assert.equal(pigLatin('What now'), 'atwhay ownyay');
//     });
//   });
// } else {

//   getPrompt();

// }

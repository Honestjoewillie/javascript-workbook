'use strict';
//1--Use a do...while loop to console.log the numbers from 1 to 1000.
let i = 0;
do {
    i += 1;
    console.log("This is number" + i + "in 1000");
} while (i < 1000);

//2--Create an object (an array with keys and values) called person with the following data:
//firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

const person = {
    firstname: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
};

//3--Use a for...in loop and if statement to console.log the value associated with 
//the key birthDate if the birth year is an odd number.
 function findDate(obj){
     for (let i in obj){
         if(obj[i].match(/^.*[13579]$/)){
            console.log(obj[i].match(/^.*[13579]$/));
            console.log(obj[i]);
         }
    }
}
 findDate(person);

//4--Create an arrayOfPersons that contains mulitiple objects. 
//4--You can simply copy/paste the person object you made above multiple times. 
//4--Feel free to change the values to reflect multiple people you might have in your database.
const arrayOfPersons = [
    {
        name: 'Neil',
        sex: 'male',
        job: 'Hippie',
        born: 1953,
        lifeStatus: 'alive'
    },
    {
        name: 'Vyvyan',
        sex: 'male',
        job: 'Medical Student',
        born: 1957,
        lifeStatus: 'alive'
    },
    {
        name: 'Rick',
        sex: 'male',
        job: 'Peoples Poet',
        born: 1958,
        lifeStatus: 'dead'
    },
    {
        name: 'Mike',
        sex: 'male',
        job: 'unknown',
        born: 1950,
        lifeStatus: 'alive'
    },
    {
        name: 'Mister Rogers',
        sex: 'male',
        job: 'teacher',
        born: 1928,
        lifeStatus: 'dead'
    },
    {
        name: 'Joey Ramone',
        sex: 'male',
        job: 'singer',
        born: 1951,
        lifeStatus: 'dead'
    },
    {
        name: 'Courtney Barnet',
        sex: 'female',
        job: 'singer',
        born: 1987,
        lifeStatus: 'alive'
    }
];
//5--Use .map() to map over the arrayOfPersons and console.log() their information.
const info = arrayOfPersons.map(function(list){
    console.log(list);
});

//6--Use .filter() to filter the persons array and console.log only males in the array.
const males = arrayOfPersons.filter(function(dudes) {
    return dudes.sex === 'male';
});
console.log(males);

//7--Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990
const b1990 = arrayOfPersons.filter(function(old){
    return old.born < 1990;
});
console.log(b1990);
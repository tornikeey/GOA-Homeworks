// const numbers = [3, 7, 15, 2, 9];

// const index = numbers.findIndex(num => num > 10);

// console.log(index);




// const students = [
//   { name: "Alex", score: 80 },
//   { name: "Jerry", score: 75 },
//   { name: "Oto", score: 92 },
// ];

// const highScorerIndex = students.findIndex(student => student.score > 90);

// console.log(highScorerIndex);




// const words = ["Dog", "Horse", "Dad", "Day", "Coding"];

// const wordIndex = words.findIndex(word => word.startsWith("D"));

// console.log(wordIndex);

//findIndex აბრუნებს იმ ელემენტის ინდექსს, რომელიც აკმაყოფილებს ჩვენს მიწოდებულ პირობას callback ფუნქციაში, ხოლო თუ ვერაფერი მოიძებნა, მაგ შემთხვევაში კი -1-ს





const words = ["Hello", "Welcome", "JavaScript"];

const sentence = words.reduce((acc, word) => acc + " " + word);

console.log(sentence);





const numbers = [5, 10, 15];

const sum = numbers.reduce((acc, current) => acc + current, 0);

console.log(sum);





Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}


const nums = [1, 2, 3];

const total = nums.myReduce((acc, val) => acc + val, 0);

console.log(total);
// function reverseTraverse(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// const numbers = [10, 20, 30, 40, 50, 60];
// reverseTraverse(numbers);



// const countSpaces = function(sentence) {
//   let count = 0;
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === ' ') {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countSpaces("Hello My Friend"))



// function filter(arr, helper) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (helper(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// const numbers = [1, 2, 3, 4, 5];

// function isEven(num) {
//   return num % 2 === 0;
// }

// const evenNumbers = filter(numbers, isEven);

// console.log(evenNumbers);

const greet = () => "Hello world";

const sayHello = name => `Hello ${name}`;

const filterArray = (arr, num) => arr.filter(item => item !== num);

console.log(greet()); 

console.log(sayHello("Tornike")); 

console.log(filterArray([1, 2, 3, 2, 4], 2)); 

function greet() {
  console.log("Hello from greet!");
}

function higherOrderFunction(func) {
  console.log("Calling the function passed as argument:");
  func();
}

higherOrderFunction(greet);



// Stack მუშაობს LIFO პრინციპით, ხოლო Heap კი სტრუქტურირებულია რეფერენსებით. Stack-ი არის სწრაფი და დროებითი ხოლო Heap კი უფრო მასშტაბური და ფართო



//2
function outerFunction() {
  return function innerFunction() {
    console.log("Returned function");
  };
}

const returnedFunc = outerFunction();
returnedFunc();



//3
const numbers = [10, 20, 30, 40];

numbers.forEach(function (num, index) {
  console.log(`Index: ${index}, Value: ${num}`);
});



//4
function manualForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

const names = ["Tornike", "Atuashvili", "18"];

manualForEach(names, function(name, index) {
  console.log(`Name at index ${index}: ${name}`);
});
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


let numbers = [5, 10, 15, 20, 25];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum:", sum);


let fruits = ["apple", "cherry", "strawberry", "apple", "orange"];
let count = 0;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    count++;
  }
}
console.log("Apple count:", count);


let nums = [2, 4, 6, 8, 10];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] ** 2);
}


let names = ["Nino", "Alice", "Charlie"];
for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}`);
}
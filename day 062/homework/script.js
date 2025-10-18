let arr = ["dog", "cat", "bird", "fish"];
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}


let number = 8;
do {
  console.log("The Number is " + number);
  number--;
} while (number > 0);


let n = 1;
while (n <= 30) {
  if (n % 3 === 0) {
    console.log(n);
  }
  n++;
}


let word = "banana";
let index = 0;
let count = 0;
while (index < word.length) {
  if (word[index] === "a") {
    count++;
  }
  index++;
}
console.log("Count of 'a':", count);
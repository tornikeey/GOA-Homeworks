for (let i = 0; i < 10; i++) {
  console.log("Tornike");
}
// for loop starts by 0 and runs untill reach 10

for (let i = 10; i >= 0; i--) {
  console.log(i);
}



function filter(numbers) {
  let filteredArr = [];

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
      filteredArr.push(numbers[i]);
    }
  }

  return filteredArr;
}

function sumNumbers(numbers) {
  let sum = 0; 

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

let nums = [5, 10, 15, 20];

console.log(sumNumbers(nums));




function realFriends(names) {
  let myFriends = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].length >= 4) {
      myFriends.push(names[i]);
    }
  }

  return myFriends;
}

let inputNames = ["Ana", "Luka", "Giorgi", "Nia", "Saba", "Eka"];
let result = realFriends(inputNames);

console.log(result);
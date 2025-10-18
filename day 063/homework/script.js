const addString = (str, arr) => {
  let newArr = [];
  if (!arr.includes(str)) {
    newArr.push(str);
  }
  console.log(newArr);
};
addString("apple", ["banana", "cherry", "orange"]);


const avgOfThree = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum / nums.length);
};
avgOfThree([4, 8, 12]);


function checkPassword(password) {
  if (password.length < 6) {
    return "Password is Too Short Try again";
  }
  let hasLetter = false;
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      hasLetter = true;
    } else {
      hasNumber = true;
    }
  }
  if (hasLetter && hasNumber) {
    return "Password Is strong";
  } else {
    return "The Password Must Contain numbers and letters and it should be at least 6 characters long";
  }
}
console.log(checkPassword("abc123"));
const secretNumber = 7
const button = document.createElement("button")
button.textContent = "Guess the secret number"
document.body.appendChild(button)

button.addEventListener("click", function() {
  const userGuess = Number(prompt("Enter a number:"))
  if (userGuess > secretNumber) {
    alert("Your number is too high, try again")
  } else if (userGuess < secretNumber) {
    alert("Your number is too low, try again")
  } else {
    alert("You have guessed the secret number!")
  }
})



let fullName = "Tornike Atuashvili"
for (let i = 0; i < fullName.length; i++) {
  console.log(fullName[i])
}



for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ")
  } else if (i % 3 === 0) {
    console.log("FIZZ")
  } else if (i % 5 === 0) {
    console.log("BUZZ")
  } else {
    console.log(i)
  }
}
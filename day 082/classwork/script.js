const numbers = [5, 12, 8, 130, 44];

let filtered = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    filtered.push(numbers[i]);
  }
}

console.log(filtered);

// გამშვები გარემო არის პროგრამული გარემო, სადაც კოდი რეალურად სრულდება.
// REPL ინმარტება, როგორც Read Eval Print Loop 
// Read- კითხულობს
//Eval- აფასებს და ასრულებს კოდს
//Print- ბეჭდავს შედეგს
//Loop- იმეორებს პროცესს
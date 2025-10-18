// Hoisting is in JS variable and function declarations. but it's a bad practice, because this creates a risk of confusion and can become a source of bugs.

sayHello(); //it works

function sayHello() {
  console.log("Hello from hoisted function!");
}

console.log(myVar); //undefined
var myVar = "Hoisted var";

// To avoid confusion, the best practice is to use let and const, because they are safer and make the code more readable and clear.

function printUserInfo() {
  let name = "Tornike";
  let age = 18;

  console.log(name);
  console.log(age);
}


  const t = document.getElementById("text")
  t.textContent = "Changed Text";
  t.style.backgroundColor = "yellow";
  t.id = "newId";
  t.className = "active";

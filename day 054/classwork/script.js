let input = prompt("Enter The Number:");
let number = parseInt(input);

if (number !== number) {
    alert("Error:Please enter a numeric value");
} else if (number % 2 === 0) {
    alert("Alert: This Number Is Even");
} else {
    alert("This Number Is Odd");
}

let savedPassword = "mySecret123";

let userPassword = prompt("Please, Enter The Password:");

if (userPassword === savedPassword) {
    alert("Passwords match");
    console.log("Passwords match");
} else {
    alert("Passwords do not match");
    console.log("Passwords do not match");
}
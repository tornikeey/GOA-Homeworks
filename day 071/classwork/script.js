// class Account {

//   #email;
//   #password;

//   constructor(name, email, password) {
//     this.name = name;
//     this.#email = email;
//     this.#password = password;
//   }

//   introduce() {
//     console.log(`Hello, My Name Is ${this.name}`);
//   }

//   set changePassword(newPassword) {
//     const isValidLength = newPassword.length >= 6;
//     const hasLetter = /[a-zA-Z]/.test(newPassword);
//     const hasNumber = /[0-9]/.test(newPassword);

//     if (isValidLength && hasLetter && hasNumber) {
//       this.#password = newPassword;
//       console.log("Password Changed Succesfully");
//     } else {
//       console.log("Password Must Be at least 6 characters long and contain both letters and numbers");
//     }
//   }

//   get getEmail() {
//     return this.#email;
//   }
// }

// const user1 = new Account("Tornike", "tokke@example.com", "abc123");

// user1.introduce();

// console.log(user1.getEmail);

// user1.changePassword = "123";
// user1.changePassword = "hello";
// user1.changePassword = "hello123";


// class Vehicle {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }

//   startEngine() {
//     console.log(`The engine of ${this.brand} is starting.`);
//   }

//   getInfo() {
//     return `This is a ${this.brand} made in ${this.year}.`;
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, year, doors) {
//     super(brand, year);
//     this.doors = doors;
//   }

//   honk() {
//     console.log("Beep beep!");
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(brand, year, hasSidecar) {
//     super(brand, year);
//     this.hasSidecar = hasSidecar;
//   }

//   revEngine() {
//     console.log("Vrrroooom!");
//   }
// }

// const myCar = new Car("Toyota", 2020, 4);
// const myMotorcycle = new Motorcycle("Harley-Davidson", 2018, false);

// myCar.startEngine();
// myCar.honk();
// console.log(myCar.getInfo());

// myMotorcycle.startEngine();
// myMotorcycle.revEngine();
// console.log(myMotorcycle.getInfo());



const accounts = [];

document.body.innerHTML = `
  <form id="form">
    <input type="email" id="email" placeholder="Email" required><br>
    <input type="password" id="password" placeholder="Password" required><br>
    <input type="text" id="fullname" placeholder="Full Name" required><br>
    <button type="submit">Submit</button>
  </form>
`;

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  const fullname = e.target.fullname.value;

  accounts.push({ email, password, fullname });

  console.log(accounts);
});
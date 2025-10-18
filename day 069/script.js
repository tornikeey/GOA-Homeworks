// const account = {
//   _email: "atuashvili@mail.com",
//   _pass: "121212",
//   fullname: "Tornike Atuashvili",

//   set pass(newPass) {
//     if (newPass.length >= 6) {
//       this._pass = newPass;
//       console.log("Password Changed Succesfull.");
//     } else {
//       console.log("Please, Enter 6+ Symbols");
//     }
//   },

//   get email() {
//     return this._email;
//   },

//   greet() {
//     console.log(`I'm ${this.fullname}`);
//   }
// };

// account.greet();
// console.log(account.email);

// account.pass = "123";
// account.pass = "newpass";



function Car(brand, model, year){
    this.brand=brand
    this.model=model
    this.year=year


    this.introduce = function() {
        console.log(`Car: ${this.brand} ${this.model} ${this.year}`)
    }
}

let.car1 = new Car("Toyota", "Corolla", 2018)
let.car2 = new Car("BMW", "M5", 2020 )
let.car3 = new Car("Mercedes-Benz", "CLS", 2015)

car1.introduce()
car2.introduce()
car3.introduce()
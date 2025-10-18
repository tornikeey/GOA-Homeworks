// const people = [
//   {
//     name: "Ana",
//     age: 22,
//     talk: function () {
//       console.log(`Hello, I am ${this.name}`);
//     },
//     friends: ["Nika", "Luka", "Sofi"],
//     address: {
//       city: "Tbilisi",
//     }
//   },
//   {
//     name: "Gio",
//     age: 17,
//     talk: function () {
//       console.log(`Hello, I am ${this.name}`);
//     },
//     friends: ["Davit"],
//     address: {
//       city: "Batumi",
//     }
//   },
//   {
//     name: "Luka",
//     age: 24,
//     talk: function () {
//       console.log(`Hello, I am ${this.name}`);
//     },
//     friends: ["Nino", "Saba"],
//     address: {
//       city: "Kutaisi",
//     }
//   },
//   {
//     name: "Lasha",
//     age: 19,
//     talk: function () {
//       console.log(`Hello, I am ${this.name}`);
//     },
//     friends: ["Irakli", "Sandro", "Tako"],
//     address: {
//       city: "Rustavi",
//     }
//   },
//   {
//     name: "Nana",
//     age: 16,
//     talk: function () {
//       console.log(`Hello, I am ${this.name}`);
//     },
//     friends: ["Gela", "Tamari"],
//     address: {
//       city: "Zugdidi",
//     }
//   }
// ];

// function myFilter(arr, cb) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const filteredPeople = myFilter(people, function (person) {
//   return person.age > 18 && person.friends.length >= 2;
// });

// console.log(filteredPeople);



const person = {
  name: "Tornike",
  age: 25,
  city: "Rustavi"
};

for (let key in person) {
  console.log(key, ":", person[key]);
}

const numbers = [10, 20, 30];

for (let index in numbers) {
  console.log(index, ":", numbers[index]);
}



const fruits = ["apple", "banana", "cherry"];


for (let fruit of fruits) {
  console.log(fruit);
}



const car = {
  brand: "BMW",
  year: 2020
};

for (let [key, value] of Object.entries(car)) {
  console.log(key, ":", value);
}



// for of ციკლი გამოიყენება იტერირებად ობიექტებზე, ხოლო for in გამოიყენება ობიექტში ან მასივში ინდექსების გამოსატანად
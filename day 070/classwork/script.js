class Person {
  constructor(name, age, lastname, country) {
    this.name = name;
    this.age = age;
    this.lastname = lastname;
    this.country = country;
  }

  introduce() {
    console.log(`I'm ${this.name} ${this.lastname}, ${this.age} Years Old And Im Live ${this.country}`);
  }
}

const person1 = new Person("Nino", 25, "Geguchadze", "Georgia");
const person2 = new Person("Lucas", 30, "Hradecky", "Poland");
const person3 = new Person("Anna", 22, "Hamm", "Germany");
const person4 = new Person("Marcus", 28, "Jacobs", "USA");

person1.introduce();
person2.introduce();


// Class არის template, რომლის საშუალებითაც შეგვიძლია შევქმნათ მრავალი მსგავსი ობიექტი. ასეთი კლასით შეგვიძლია სწრაფად შევქმნათ ბევრი ობიექტი ერთი და იგივე სტრუქტურით
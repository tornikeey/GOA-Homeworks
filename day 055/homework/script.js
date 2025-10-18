1  let maxNumber = 50;
   let randomNumber = Math.random() * maxNumber;
   let roundedNumber = Math.round(randomNumber);
   console.log("Random Num:", roundedNumber);

2  let name = "Tornike";
   console.log(`Hello My name is "{name}"`);

3  // let and const are used to create variables

   // let - you can change the value later
   let age = 20;
   age = 21; // this is OK

   // const - you cannot change the value
   const name = "Tornike";
   // name = "Tornike"; // this will cause an error

   // Main difference:

   // let = changeable value
   // const = fixed value (cannot be changed)

   // Both let and const work only inside the block { } where they are written


4   let fullName = "Tornike Atuashvili";
    console.log(fullName.length);

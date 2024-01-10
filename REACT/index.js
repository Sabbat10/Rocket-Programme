// les fonctions
// function sayHello() {
//   return "Hello";
// }
// console.log(sayHello());

// let sayHello = () => "Hello";
// console.log(sayHello());

const number = [2, 5, 10, 15];

// let moreThan10 = number.filter(function (n) {
//   return n >= 10;
// });

// let moreThan10 = number.filter((n) => n >= 10);
// console.log(moreThan10);
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// LES OBJETS

// let user = {
//   userA: {
//     firstName: "Sabbat",
//     lastName: "Lumpatshia",
//     presentation: () => "Hello",
//   },

//   userB: {
//     firstName: "Meghan",
//     lastName: "Kasala",
//     presentation: () => "Hello",
//   },
// };

// console.log(user.userA);
// console.log(user.userB);

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// LES CLASSES

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    console.log(`Bonjour je suis ${this.firstName}`);
  }
}

let sabbat = new User("Sabbat", "Lumpatshia");
sabbat.sayHello();

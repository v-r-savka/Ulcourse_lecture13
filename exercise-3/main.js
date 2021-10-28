'use strict';

// Create a function that return an object with keys firstName and lastName. 
//The values for those keys should be passed when the function is called:
// const obj = new User(‘Valik’, ‘Lapotkov’)
// I should be able to call a hello function on that object with a message:
// ‘Hello, my firstName is Valik, lastName is Lapotkov. I am very exited to learn JavaScript!’.



function User(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.sayHi = function () {
      alert(`Hello, my first name is ${this.firstName}, last name is ${this.lastName}.
I am very exited to learn JavaScript!`);
   };
}



const userVasyl = new User('Vasyl', 'Savka');

console.log(userVasyl);
userVasyl.sayHi();
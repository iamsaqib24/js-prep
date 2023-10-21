// What if we want to organize our code inside one of our shared functions - perhaps by defining a new inner function

// function user(name, age) {
//   this.name = name;
//   this.age = age;
// }
// console.log(user);

// user.prototype.setAge = function () {
//   // here this refer to object itself.
//   console.log(this);

//   function add() {
//     // here this refer to the window/global object.
//     console.log(this);
//     this.age++;
//   }
//   add();
// };

// user.prototype.sayHello = function () {
//   console.log(`hello ${this.name}, your age is : ${this.age}`);
// };

// const user1 = new user("Saqib", 26);
// console.log(user1.setAge());
// user1.age;

// ------------------------------------------------------------------------------

// Use arrow function to bind 'this' lexically.

function user(name, age) {
  this.name = name;
  this.age = age;
}

user.prototype.setAge = function () {
  // here refer to this object itself.
  console.log(this);

  const add = () => {
    // here this refer to the where it was born. or you can lexical scoped.
    console.log(this);
    this.age++;
  };
  add();
};

// user.prototype.sayHello = function () {
//   console.log(`hello ${this.name}, your age is : ${this.age}`);
// };

const user1 = new user("Saqib", 26);
user1.setAge();

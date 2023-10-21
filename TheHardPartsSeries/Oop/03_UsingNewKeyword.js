// keyword that automates the hard work for us: new,

// when we call the constructor function using 'new' in front, we automate 2 things:
// 1. create a new user object
// 2. return the new user object.

// functions are both objects and functions in javascript,
// all functions have a default property on their object version, "prototype" which is itself an object.
// which we will use to replace our 'userFunction' object.

function user(name, age) {
  this.name = name;
  this.age = age;
}
console.log(user);

user.prototype.setAge = function () {
  this.age++;
};

user.prototype.sayHello = function () {
  console.log(`hello ${this.name}, your age is : ${this.age}`);
};

const user1 = new user("Saqib", 26);
user1.setAge();
user1.sayHello();

const user2 = new user("Nasa", 27);
user2.setAge();
user2.sayHello();

// No problem,
// benefit - faster to write

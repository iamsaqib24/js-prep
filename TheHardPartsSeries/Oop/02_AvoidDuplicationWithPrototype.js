// store the setAge function in just one object and have the interpreter,
// if it doesn't find the function on user1,
// lookup to that object to check if it's there.

// make that link with 'Object.create()'
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

function user(name, age) {
  const newUser = Object.create(userFunction);

  newUser.name = name;
  newUser.age = age;

  return newUser;
}

const userFunction = {
  sayHello: function () {
    console.log(`Hello ${this.name}`);
  },
  setAge: function () {
    this.age++;
  },
};

const user1 = user("Saqib", 26);

console.log(user1.sayHello);

console.log(`Age before setAge : ${user1.age}`);

user1.setAge();

console.log(`Age after setAge : ${user1.age}`);

const user2 = user("Nasa", 27);

console.log(user2.sayHello());

console.log(`Age before setAge : ${user2.age}`);

user2.setAge();

console.log(`Age after setAge : ${user2.age}`);

// problem:
// no problem, it's beautiful,
// sophisticated but not standard

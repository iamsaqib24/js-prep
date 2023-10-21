// the class is syntactic sugar,
// it is a function object combo with a prototype property.
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setAge() {
    this.age++;
  }
  sayHello() {
    console.log(`hello ${this.name}`);
  }
}

const user1 = new User("Saqib", 26); // a new instance of the User class is created with the name "Saqib" and age 26, and assigned to the variable user1.
console.log(user1.age);
user1.setAge();
console.log(user1.age);
user1.sayHello();

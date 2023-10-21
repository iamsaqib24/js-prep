// Generate objects using function,

function user(name, age) {
  const newUser = {};

  newUser.name = name;
  newUser.age = age;

  newUser.setAge = function () {
    newUser.age++;
  };

  return newUser;
}

const user1 = user("Saqib", 26);

console.log(`Age before setAge function: ${user1.age}`);
user1.setAge();
console.log(`Age after setAge function: ${user1.age}`);

const user2 = user("Nasa", 28);

console.log(`Age before setAge function: ${user2.age}`);
user2.setAge();
console.log(`Age after setAge function: ${user2.age}`);

// problem :
// the setAge method is stored individually on each object
// we are doing copies of identical function on every single object.

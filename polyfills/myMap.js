const array = [1, 2, 3, 4, 5];

function multiplyBy2(num) {
  return num * 2;
}

Array.prototype.myMap = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i]));
  }
  return output;
};

const newArray = array.myMap(multiplyBy2);
console.log(newArray);

console.log(
  "Using myMap method:",
  array.myMap((item) => item * 3)
);
console.log(
  "Using default map method:",
  array.map((item) => item * 3)
);

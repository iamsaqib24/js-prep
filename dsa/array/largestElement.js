// largest element in the array,

// using built methods
let arr = [2, 5, 3, 19, 40, 39, 90, 55, 88];
let res = Math.max(...arr);
let index = arr.indexOf(res);
console.log(`largest element ${res} is present at index ${index}`);

// Naive approach
function getLargest(arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    let flag = true;

    for (let j = 0; j < size; j++) {
      if (arr[j] > arr[i]) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      return console.log(
        `largest element in the array is ${arr[i]} which is present at index ${i}`
      );
    }
  }
  return -1;
}
console.log(getLargest([2, 5, 3, 19, 40]));

// efficient approach,
function largestElement(arr) {
  let large = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[large]) {
      large = i;
    }
  }
  return console.log(
    `largest element in the array is ${arr[large]} which is present at index ${large}`
  );
}
console.log(largestElement([2, 5, 3, 19, 40, 39, 55, 78]));

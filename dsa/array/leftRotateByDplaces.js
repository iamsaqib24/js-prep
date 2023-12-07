// Naive approach,
let arr = [0, 10, 56, 0, 5, 8, 35];

function leftRotateByOne(arr) {
  let temp = arr[0];
  let n = arr.length - 1;

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n] = temp;
}

function leftRotateByD(arr, d) {
  let n = arr.length;

  for (let i = 0; i < d; i++) {
    leftRotateByOne(arr, n);
  }
  return arr;
}

console.log(leftRotateByD(arr, 2));

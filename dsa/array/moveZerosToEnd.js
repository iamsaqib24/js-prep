// naive approach,

let arr = [10, 5, 0, 0, 8, 0, 9, 0];

function zeroToEnd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] != 0) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }
  return arr;
}
console.log(zeroToEnd(arr));

// efficient approach
let arr1 = [0, 10, 56, 0, 5, 0, 0, 8, 0, 9, 0, 8, 35];

function moveZerosToEnd(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      let temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;
      count++;
    }
  }
  return arr;
}

console.log(moveZerosToEnd(arr1));

function largestElement(arr) {
  let large = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[large]) {
      large = i;
    }
  }
  return large;
}

function secondLargest(arr) {
  let largest = largestElement(arr);
  let res = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[largest]) {
      if (res == -1) {
        res = i;
      } else if (arr[i] > arr[res]) {
        res = i;
      }
    }
  }
  return console.log(
    `second largest element in the array is ${arr[res]} which is present at index ${res}`
  );
}

console.log(secondLargest([2, 5, 3, 19, 40, 89, 39, 55, 77, 78]));

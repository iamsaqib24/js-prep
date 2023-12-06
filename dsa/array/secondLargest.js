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
secondLargest([2, 5, 3, 19, 40, 89, 39, 55, 77, 78]);

// efficient solution

function secondLargest(arr) {
  let n = arr.length;

  if (n < 2) {
    return console.log("Array should have at least two elements");
  }

  let first = 0;
  let second = -1;

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[first]) {
      second = first;
      first = i;
    } else if (arr[i] < arr[first]) {
      if (second == -1 || arr[i] > arr[second]) {
        second = i;
      }
    }
  }

  if (second == -1) {
    return console.log("There is no second largest element");
  }

  return console.log(
    `Second largest element in the array is ${arr[second]} at index ${second}`
  );
}

secondLargest([5, 20, 12, 20, 8]);

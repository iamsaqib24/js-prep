// Naive approach
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) return false;
    }
  }
  return true;
}

console.log(isSorted([10, 20, 40, 89]));
console.log(isSorted([10, 5, 20, 40]));

// Efficient approach,

function checkSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkSorted([10, 5, 20, 40]));
console.log(checkSorted([10, 20, 40, 89]));

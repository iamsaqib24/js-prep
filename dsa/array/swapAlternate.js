let arr = [5, 9, 6, 8, 1, 2, 3, 7, 11];

function swapAlternate(arr) {
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}

swapAlternate(arr);

console.log(arr);

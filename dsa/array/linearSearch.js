function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return console.log(`${item} is present at index ${i}`);
    }
  }
  return console.log(`${item} is not present in the array.`);
}

linearSearch([3, 43, 52, 89, 6, 4], 9);
linearSearch([3, 43, 52, 89, 6, 4], 52);

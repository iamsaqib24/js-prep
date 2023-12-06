// Remove duplicates from a sorted array,

function rmvDup(arr) {
  // Create a temporary array to store unique elements
  let temp = [];
  temp[0] = arr[0];
  let res = 1;

  for (let i = 1; i < arr.length; i++) {
    if (temp[res - 1] !== arr[i]) {
      temp[res] = arr[i];
      res++;
    }
  }
  // Copy the unique elements from the temporary array back to the original array
  for (let i = 0; i < res; i++) {
    arr[i] = temp[i];
  }
  return res;
}
console.log(rmvDup([10, 20, 20, 30, 30, 30]));

// efficient approach,
function removeDuplicates(arr) {
  let res = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[res - 1]) {
      arr[res] = arr[i];
      res++;
    }
  }
  return res;
}
console.log(removeDuplicates([10, 20, 20, 30, 30, 30]));

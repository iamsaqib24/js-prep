// Merge sorted array,
const array1 = [2, 5, 7, 9, 11, 14];
const array2 = [3, 6, 8, 10];

const m = array1.length;
const n = array2.length;

const result = Array(m + n).fill(0);
// console.log(result);

// logic for merge sorted array
function mergeSortedArray(arr1, m, arr2, n) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      k++;
      i++;
    } else {
      result[k] = arr2[j];
      k++;
      j++;
    }
  }
  // when arr1 is exhausted
  while (j < n) {
    result[k] = arr2[j];
    k++;
    j++;
  }

  // when arr2 is exhausted
  while (i < m) {
    result[k] = arr1[i];
    k++;
    i++;
  }
  console.log(result);
}

mergeSortedArray(array1, m, array2, n);

// Reverse an array,
const ahmedArray = [5, 9, 6, 8, 1, 2, 3, 7]; // array declare

let initial = 0; // first index of the array
let last = ahmedArray.length - 1; // last index of the array

// custom swap function -> It's my logic for swapping,
function mySwap(initialIndex, ahmedArray, lastIndex) {
  let temp; // undefined
  // console.log(temp);
  temp = ahmedArray[initial]; // undefined = 5
  ahmedArray[initial] = ahmedArray[last]; // 5 = 3
  ahmedArray[last] = temp; // 3 = 5
  // console.log(ahmedArray[initial]);
  // console.log(ahmedArray[last]);
}

while (initial <= last) {
  mySwap(initial, ahmedArray, last); // function invocation or calling
  initial = initial + 1;
  last = last - 1;
}

console.log(ahmedArray);

function countDigits(n) {
  // Convert the number to a string to easily get its length
  let numStr = Math.abs(n).toString();

  // Return the number of digits
  return numStr.length;
}

// Example usage:
let number = 1235;
let digitCount = countDigits(number);

console.log(`Number of digits in ${number}: ${digitCount}`);

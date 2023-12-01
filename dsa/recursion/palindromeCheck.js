// using iterative approach,
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

let str = "abbac";
console.log(isPalindrome(str)); // Output: true

// using recursion,
let str2 = "aba";
let start = 0;
let end = str2.length - 1;
function isPalindromeRecursive(str2, start, end) {
  if (start >= end) return true;

  return (
    str2[start] == str2[end] && isPalindromeRecursive(str2, start + 1, end - 1)
  );
}

console.log(isPalindromeRecursive(str2, start, end));

// Note -> recursive solution can lead to call stack errors for long strings

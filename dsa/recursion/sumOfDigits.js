function getSumOfDigits(n) {
  if (n == 0) return 0;
  else return getSumOfDigits(Math.floor(n / 10)) + (n % 10);
}
console.log(getSumOfDigits(873));

// using iterative approach,

function getSumOfDigitsUisngIterative(n) {
  let res = 0;
  while (n > 0) {
    res = res + (n % 10);
    n = Math.floor(n / 10);
  }
  return res;
}
console.log(getSumOfDigitsUisngIterative(87321));

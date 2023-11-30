function palindrome(n) {
  let rev = 0;
  let temp = n;

  while (temp != 0) {
    let ld = temp % 10;
    rev = rev * 10 + ld;
    temp = Math.floor(temp / 10);
  }
  return rev == n;
}

console.log(palindrome(3443));
console.log(palindrome(34432));
console.log(palindrome(343));

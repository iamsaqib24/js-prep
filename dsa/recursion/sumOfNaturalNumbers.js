function getSum(n) {
  if (n == 0) return 0;

  return n + getSum(n - 1);
}
console.log(getSum(4));

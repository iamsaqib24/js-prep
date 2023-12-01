function nto1(n) {
  if (n == 0) return;

  console.log(n);
  nto1(n - 1);
}
console.log(nto1(4));

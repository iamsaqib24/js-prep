// using iterative

function fact(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
}
console.log(fact(15));

// using recurison

function recFact(n) {
  if (n == 0) return 1;

  return n * recFact(n - 1);
}
console.log(recFact(15));

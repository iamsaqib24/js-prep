function trailingZerosInFactorial(n) {
  let fact = 1;
  let res = 0;

  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }

  while (fact % 10 == 0) {
    res++;
    fact = Math.floor(fact / 10);
  }
  return res;
}

console.log(trailingZerosInFactorial(15));

// Efficient Approach,

function countTrailingZeros(n) {
  let count = 0;
  for (let i = 5; i <= n; i = i * 5) {
    count = count + Math.floor(n / i);
  }
  return count;
}
countTrailingZeros(100);

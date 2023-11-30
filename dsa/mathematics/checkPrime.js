// Naive Solution,
function isPrime(n) {
  if (n == 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
console.log(isPrime(65));
console.log(isPrime(7));

// Efficient Solution,
function optimisedPrime(n) {
  if (n == 1) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
console.log(optimisedPrime(65));
console.log(optimisedPrime(7));

// More Efficient Solution,
function moreOptimisedPrime(n) {
  if (n == 1) return false;

  if (n == 2 || n == 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}
moreOptimisedPrime(7);
moreOptimisedPrime(121);
moreOptimisedPrime(1031);

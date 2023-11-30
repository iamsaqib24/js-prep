function gcd(a, b) {
  let res = Math.min(a, b);

  while (res > 0) {
    if (a % res == 0 && b % res == 0) {
      break;
    }
    res--;
  }
  return res;
}
console.log(gcd(4, 6));
console.log(gcd(100, 200));

// Solve this using Euclidean Algorithm.
// basic version of euclidean algorithm
function gcd(a, b) {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

console.log(gcd(10, 15));

// Optimised euclidean algorithm recursively,

function optimisedGCDbyEuclidean(a, b) {
  if (b == 0) {
    return a;
  } else {
    return optimisedGCDbyEuclidean(b, a % b);
  }
}

console.log(optimisedGCDbyEuclidean(10, 15));
console.log(optimisedGCDbyEuclidean(12, 15));

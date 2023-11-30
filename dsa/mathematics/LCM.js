// smallest number which is divisible by both numbers.

function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15));
console.log(lcm(3, 7));
console.log(lcm(2, 8));

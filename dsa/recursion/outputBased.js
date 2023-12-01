// problem - 1
function recursion(n) {
  // base case
  if (n == 0) return;

  recursion(n - 1);
  console.log(n);
  recursion(n - 1);
}
console.log(recursion(3)); // 1 2 1 3 1 2 1

// problem - 2
function recursion2(n) {
  if (n == 0) return;

  console.log(n);
  recursion2(n - 1);
  console.log(n);
}
console.log(recursion2(3)); // 3 2 1 1 2 3

// problem - 3
function recursion3(n) {
  if (n == 1) return 0;
  else return 1 + recursion3(n / 2);
}
console.log(recursion3(16)); // 4

// problem - 4
function fun(n) {
  if (n == 0) return;

  fun(Math.floor(n / 2));
  console.log(n % 2);
}
console.log(fun(7));

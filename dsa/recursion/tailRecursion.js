// Tail Recursion -> When the last thing that happens in the function is recursive call and nothing happens after that.

// 1 to n using tail recursion
function usingTailRecursive(n, k = 1) {
  if (n == 0) return;

  console.log(k);
  usingTailRecursive(n - 1, k + 1);
}
console.log(usingTailRecursive(5));

// factorial using tail recursion,
function tailFact(n, k = 1) {
  if (n == 0 || n == 1) return k;

  return tailFact(n - 1, k * n);
}
console.log(tailFact(6));

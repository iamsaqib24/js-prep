function maxPieces(n, a, b, c) {
  if (n == 0) return 0;
  if (n < 0) return -1;

  result = Math.max(
    maxPieces(n - a, a, b, c),
    maxPieces(n - b, a, b, c),
    maxPieces(n - c, a, b, c)
  );

  if (result == -1) return -1;

  return result + 1;
}

console.log(maxPieces(23, 11, 9, 12));
console.log(maxPieces(9, 2, 2, 2));

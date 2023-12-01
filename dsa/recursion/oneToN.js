function oneTon(n) {
  if (n == 0) return;

  oneTon(n - 1);
  console.log(n);
}
oneTon(4);

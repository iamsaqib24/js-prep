// 1. only one disc moves at a time
// 2. no longer disc above smaller
// 3. only the top disc of a tower can be moved.

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n == 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

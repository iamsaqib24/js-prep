let str = "javascript";
let freqMap = {};

for (const char of str) {
  if (freqMap[char]) {
    freqMap[char] += 1;
  } else {
    freqMap[char] = 1;
  }
}

console.log(freqMap);

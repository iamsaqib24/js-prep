function generateSubsets(str, curr = "", i = 0) {
  if (i == str.length) {
    console.log(curr);
    return;
  }

  generateSubsets(str, curr, i + 1);
  generateSubsets(str, curr + str[i], i + 1);
}
console.log(generateSubsets("ABC"));

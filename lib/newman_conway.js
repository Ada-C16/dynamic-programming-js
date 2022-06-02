
// Time Complexity: O(N)
// Space Complexity: O(N)

function newmanConway(num) {
  if (num === 0) throw new Error;
  if (num === 1) return "1";

  let result = Array(num);

  result[1] = 1;
  result[2] = 1;
  for (let i = 3; i <= num; i++) {
    result[i] = result[result[i - 1]] + result[i - result[i - 1]];
  }

  result.shift();
  console.log(result);

  return result.join(' ');
}

module.exports = {
  newmanConway
};
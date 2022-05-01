
// Time Complexity:
// Space Complexity:

function newmanConway(num) {
  if (num === 0) throw new Error();

  // let i;
  let array = [];
  array[0] = 0;
  array[1] = 1;
  array[2] = 1;

  if (num === 1) return '1';

  for (let i = 3; i <= num; i++) {
    array[i] = array[array[i - 1]] + array[i - array[i - 1]];
  }

  array.shift(); //O(n) operation

  return array.join(' ');
};

module.exports = {
  newmanConway
};

// Time Complexity: O(n) n is the size of the array
// Space Complexity: O(1)

function maxSubArray(nums) {
  if (nums.length === 0) return null;

  let maxSum = nums[0];
  let sum = 0;

  for (let num of nums) {
    sum += num;
   
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

module.exports = {
  maxSubArray
}

// Time Complexity:
// Space Complexity:

function maxSubArray(nums) {
  if (nums.length === 0) return null;

  let maxSum = nums[0];
  let sum = 0;

  for (let num of nums) {
    sum += num;
    // can I use max in a clever way? maxSum = Math.max(0, sum);
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

// Time Complexity: O(N)
// Space Complexity: O(1)

function maxSubArray(nums) {
  if (nums.length === 0) return null;

  let maxSubarray = nums[0];
  let currentSubarrayMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSubarrayMax = Math.max(currentSubarrayMax + nums[i], nums[i]);
    maxSubarray = Math.max(maxSubarray, currentSubarrayMax);
  }

  return maxSubarray;
}

module.exports = {
  maxSubArray
}
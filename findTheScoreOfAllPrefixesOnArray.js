var findPrefixScore = function(nums) {
    let maxSoFar = nums[0];
    let prefixSum = 0;
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        maxSoFar = Math.max(maxSoFar, nums[i]);
        prefixSum += nums[i] + maxSoFar;
        ans.push(prefixSum);
    }

    return ans;
};

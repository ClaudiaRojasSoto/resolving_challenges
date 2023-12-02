var distance = function(nums) {
  let n = nums.length, map = {};
  for (let i = 0; i < n; i++) {
    if (!map[nums[i]]) map[nums[i]] = [];
    map[nums[i]].push(i);
  }
  let ans = Array(n).fill(0);
  for (let num in map) {
    let indices = map[num], m = indices.length, leftSum = 0;
    for (let j = 0; j < m; j++) {
      leftSum += indices[j];
      ans[indices[j]] += indices[j] * (j + 1) - leftSum;
    }
    let rightSum = 0;
    for (let j = m - 1; j >= 0; j--) {
      rightSum += indices[j];
      ans[indices[j]] += rightSum - indices[j] * (m - j);
    }
  }
  return ans;
};

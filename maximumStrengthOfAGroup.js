var maxStrength = function(nums) {
    let maxProduct = -Infinity;

    // Iterate through all subsets
    for (let mask = 1; mask < (1 << nums.length); mask++) {
        let product = 1;

        // Iterate through each element to check if it's included in the current subset
        for (let i = 0; i < nums.length; i++) {
            if (mask & (1 << i)) {
                product *= nums[i];
            }
        }

        // Update maxProduct if the current product is greater
        maxProduct = Math.max(maxProduct, product);
    }

    return maxProduct;
};

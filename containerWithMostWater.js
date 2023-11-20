var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the current area
        let currentArea = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointers
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

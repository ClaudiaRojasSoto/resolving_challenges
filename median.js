/* 4. Median of Two Sorted Arrays
Hard
26.1K
2.9K
Companies
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106 */

function findMedianSortedArrays(nums1, nums2) {
    const newArray = nums1.concat(nums2);
    newArray.sort((a, b) => a - b); 

    if (newArray.length % 2 === 0) {
        
        const middleIndex = newArray.length / 2;
        const median = (newArray[middleIndex - 1] + newArray[middleIndex]) / 2;
        return median;
    } else {
        
        const middleIndex = Math.floor(newArray.length / 2);
        const median = newArray[middleIndex];
        return median;
    }
};
const nums1=[2,3,4,5];
const nums2=[7,8,9];
console.log('median',findMedianSortedArrays(nums1 , nums2));



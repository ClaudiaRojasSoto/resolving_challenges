/* Intuition
The sortBy function takes an array arr and a function fn as parameters. It is designed to sort the array in ascending order based on the values returned by the function for each element. In other words, it allows you to sort an array based on a custom criterion defined by the function fn.

Approach:
The sortBy function uses the sort method on the input array arr. The sort method sorts the array in place based on the values of its elements.

The sorting is done using a custom comparison function that calculates the difference between the results of applying the function fn to two elements, a and b. The comparison function (a, b) => fn(a) - fn(b) is used for this purpose.

By subtracting the result of fn(b) from fn(a), we achieve ascending sorting order. If fn(a)is smaller thanfn(b), the result will be a negative number, indicating that a should come before b in the sorted array. If fn(a) is larger, the result will be positive, and a should come after b.

The array is sorted based on the calculated differences, so elements for which fn(a) is smaller will appear earlier in the sorted array, while elements for which fn(b) is smaller will appear later. */


var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a) - fn(b));
};

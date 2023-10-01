function leftmostNodesSum(array) {
  let sum = 0;
  let currentIndex = 0;

  while (currentIndex < array.length) {
    sum += array[currentIndex];
    currentIndex = 2 * currentIndex + 1;
  }

  return sum;
}

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]))
// => 11

module.exports = leftmostNodesSum

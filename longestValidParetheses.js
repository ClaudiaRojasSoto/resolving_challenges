var longestValidParentheses = function(s) {
    // Initialize a stack with -1 to serve as a base for valid substrings.
    let stack = [-1];

    // Variable to store the length of the longest valid substring.
    let longest = 0;

    // Iterate through each character in the string.
    for (let i = 0; i < s.length; i++) {
        // If the character is an opening bracket, push its index onto the stack.
        if (s[i] === '(') {
            stack.push(i);
        } else {
            // Pop the top element from the stack.
            stack.pop();

            // If the stack is empty, push the current index onto the stack.
            if (stack.length === 0) {
                stack.push(i);
            } else {
                // Update the longest length if the current valid substring is longer.
                longest = Math.max(longest, i - stack[stack.length - 1]);
            }
        }
    }

    // Return the length of the longest valid parentheses substring.
    return longest;
};

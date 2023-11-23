var calculate = function(s) {
    let stack = [];
    let operand = 0;
    let result = 0; // For the on-going result
    let sign = 1;  // 1 means positive, -1 means negative

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (isDigit(ch)) {
            operand = 10 * operand + (ch - '0');
        } else if (ch === '+') {
            result += sign * operand;
            sign = 1;
            operand = 0;
        } else if (ch === '-') {
            result += sign * operand;
            sign = -1;
            operand = 0;
        } else if (ch === '(') {
            // Push the result and the sign onto the stack, for later
            stack.push(result);
            stack.push(sign);

            // Reset the sign and result for the new sub-expression
            sign = 1;
            result = 0;
        } else if (ch === ')') {
            result += sign * operand;

            // The result is now evaluated, apply the last sign
            result *= stack.pop(); // stack.pop() is the sign before the parenthesis
            result += stack.pop(); // stack.pop() now is the result before the parenthesis

            operand = 0;
        }
    }

    return result + (sign * operand);
};

function isDigit(ch) {
    return ch >= '0' && ch <= '9';
}

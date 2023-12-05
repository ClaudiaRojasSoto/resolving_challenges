var once = function(fn) {
    let called = false; // Flag to track if the function has been called
    let result;         // Variable to store the result of the first call

    return function(...args) {
        if (!called) {
            result = fn(...args); // Call the function and store the result
            called = true;        // Set the flag as true after the first call
            return result;
        }
        // If the function has already been called, return undefined
        return undefined;
    };
};

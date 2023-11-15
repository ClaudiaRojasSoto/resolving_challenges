var timeLimit = function(fn, t) {
    
	return async function(...args) {
        // Create a promise that rejects after t milliseconds
        let timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });

        // Race the function execution against the timeout
        try {
            let result = await Promise.race([fn(...args), timeoutPromise]);
            return result;
        } catch (error) {
            throw error;
        }
    };
};

// Example usage
(async () => {
    const fn = async (n) => { 
        await new Promise(res => setTimeout(res, 100)); 
        return n * n; 
    };
    const inputs = [5];
    const t = 50;

    const limited = timeLimit(fn, t);
    const start = performance.now();
    let result;
    try {
        const res = await limited(...inputs);
        result = {"resolved": res, "time": Math.floor(performance.now() - start)};
    } catch (err) {
        result = {"rejected": err, "time": Math.floor(performance.now() - start)};
    }
    console.log(result); // Output
})();

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

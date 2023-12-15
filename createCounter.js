var createCounter = function(init) {
    let currentValue = init;

    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => {
            currentValue = init;
            return currentValue;
        }
    };
};

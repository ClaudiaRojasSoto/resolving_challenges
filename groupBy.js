Array.prototype.groupBy = function(fn) {
    const grouped = {};

    this.forEach(item => {
        const key = fn(item);

        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(item);
    });

    return grouped;
};

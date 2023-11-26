var findColumnWidth = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxWidths = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let length = Math.abs(grid[i][j]).toString().length;
            if (grid[i][j] < 0) {
                length++;
            }
            maxWidths[j] = Math.max(maxWidths[j], length);
        }
    }

    return maxWidths;
};

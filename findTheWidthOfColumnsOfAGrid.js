var findColumnWidth = function(grid) {
    const m = grid.length;    // Number of rows
    const n = grid[0].length; // Number of columns
    let maxWidths = new Array(n).fill(0); // Initialize widths array

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Calculate length of the integer considering negative sign
            let length = Math.abs(grid[i][j]).toString().length;
            if (grid[i][j] < 0) {
                length++; // Account for negative sign
            }

            // Update the maximum width for the column
            maxWidths[j] = Math.max(maxWidths[j], length);
        }
    }

    return maxWidths;
};

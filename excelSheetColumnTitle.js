var convertToTitle = function(columnNumber) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let columnTitle = '';
    while (columnNumber > 0) {
        columnNumber--;
        let remainder = columnNumber % 26;
        columnTitle = alphabet[remainder] + columnTitle;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return columnTitle;
};

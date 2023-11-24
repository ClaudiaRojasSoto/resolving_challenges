var maxCoins = function(piles) {
    piles.sort((a, b) => b - a);
    
    let maxCoins = 0;
    let n = piles.length;

    for (let i = 0; i < n / 3; i++) {
        maxCoins += piles[2 * i + 1];
    }

    return maxCoins;
};

var minExtraChar = function (s, dictionary) {
    const max = s.length + 1;
    const dp = Array(s.length + 1).fill(max);
    dp[0] = 0;

    dictionary = new Set(dictionary);
    for (let i = 1; i <= s.length; ++i) {
        dp[i] = dp[i - 1] + 1;
        for (let l = 1; l <= i; ++l) {
            if (dictionary.has(s.substring(i - l, i))) {
                dp[i] = Math.min(dp[i], dp[i - l]);
            }
        }
    }
    return dp[s.length];
}

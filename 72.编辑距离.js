/**
 * 72. 编辑距离
 */

var minDistance = function (word1, word2) {
    var dp = []

    for (let i = 0, len = word1.length; i <= len; i++) {
        if (!Array.isArray(dp[i])) {
            dp[i] = [];
        }
        dp[i][0] = i;
    }
    for (let i = 0, len = word2.length; i <= len; i++) {
        if (!Array.isArray(dp[0])) {
            dp[0] = []
        }
        dp[0][i] = i;
    }

    for (let i = 1, iLen = word1.length; i <= iLen; i++) {
        for (let j = 1, jLen = word2.length; j <= jLen; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
            }
        }
    }
    return dp[word1.length][word2.length]
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));
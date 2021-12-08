function longestCommonSubstr(str1, str2) {
  let len1 = str1.length,
    len2 = str2.length,
    max = Number.MIN_VALUE,
    dp = [];
  for (let i = 0; i < len1; i++) {
    dp[i] = [];
    for (let j = 0; j < len2; j++) {
      if (str1[i] != str2[j]) {     //两个字符不同
        dp[i][j] = 0;
        continue;
      }
      //应对 i-1 或 j-1 小于0的情况
      dp[i][j] = i < 1 || j < 1 ? 1 : dp[i - 1][j - 1] + 1;
      if (max < dp[i][j]) {
        max = dp[i][j];
      }
    }
  }
  console.log(dp);
  return max;
}

const str1 = "fosh",
  str2 = "fish";
console.log("fosh,fish", longestCommonSubstr(str1, str2));

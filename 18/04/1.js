function knapsack(goods, w) {
  let max = Number.MIN_VALUE,
    dp = [new Array(w)],
    length = goods.length;
  for (let j = 1; j <= w; j++) {
    dp[0][j] = goods[0].value;
  }
  for (let i = 1; i < length; i++) {
    dp[i] = [];
    for (let j = 1; j <= w; j++) {
      let rest = j - goods[i].weight;		//计算减去当前商品重量后的背包容量
      if (rest > 0) {						//套用状态转移方程
        dp[i][j] = Math.max(goods[i].value + dp[i - 1][rest], dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];			//沿用上一个单元格的价值
      }
      if (max < dp[i][j]) max = dp[i][j];	//计算最大值
    }
  }
  return max;
}

const goods = [
    { value: 1500, weight: 1 },
    { value: 3000, weight: 4 },
    { value: 2000, weight: 3 }
  ],
  w = 4;
console.log(knapsack(goods, w));

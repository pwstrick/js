function findContentChildren(g, s) {
  g.sort((a, b) => a - b);        //升序排列
  s.sort((a, b) => a - b);        //升序排列
  let n = 0,
    m = 0,
    count = 0;                    //满足的小孩人数
  while (n < g.length && m < s.length) {
    if (g[n] <= s[m]) {           //小孩能够得到满足
      n++;
      m++;
      count++;
      continue;
    }
    m++;
  }
  return count;
}
---
path: testing
date: 2021-01-20T02:01:13.579Z
title: Richest Customer Wealth
description: LeetCode Question 1672
---
```
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
```

```
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
```

```
var maximumWealth = function (accounts) { 
  return Math.max( 
    ...accounts.map((account) => 
      account.reduce((accumulator, current) => accumulator + current, 0) 
    ) 
  ); 
};
```
---
path: javascript-arrays
date: 2020-06-12T14:55:06.209Z
title: Richest Customer Wealth
description: LeetCode Question 1672
---
You are given an m x n integer grid accounts where accounts\[i]\[j]is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

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
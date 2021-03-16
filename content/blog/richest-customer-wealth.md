---
path: richest-customer-wealth
date: 2021-03-16T16:31:18.890Z
title: Richest Customer Wealth
description: LeetCode Question 1672
---
## Description

You are given an `m x n` integer grid `accounts` where accounts`[i][j]` is the amount of money the `ith` customer has in the `jth` bank. Return the **wealth** that the richest customer has.

A customer's **wealth** is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum **wealth**.

### Examples:

```js
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
```

```js
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
```

### Constraints:

```js
m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100
```

## ANSWER 

___

- - -

### **Math.max()**

### **Map()**

### R**educe()**

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)The `reduce()`method executes a `reducer`function (that you provide) on each element of the array, resulting in single output value.

`const reducer = (accumulator, currentValue) => accumulator + currentValue;`

The `accumulator` is the value that we end with and the `reducer` is what action we will perform in order to get to one value.

You must remember that a `reducer` will only return one value and one value only hence the name reduce.

```js
var maximumWealth = function (accounts) {
  return Math.max(
    ...accounts.map((account) =>
      account.reduce((accumulator, current) => accumulator + current, 0)
    )
  );
};
```
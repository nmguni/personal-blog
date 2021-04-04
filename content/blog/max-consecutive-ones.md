---
path: max-consecutive-ones
date: 2021-04-04T16:30:00.949Z
title: Max Consecutive Ones
description: LeetCode Question 485
---
## Problem statement
- - -

Given a binary array, find the maximum number of consecutive 1s in this array.

### Example 1:

```js
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```

### Note:

The input array will only contain `0` and `1`. The length of input array is a positive integer and will not exceed 10,000

## Solution
- - -
```js

let ones = [1, 1, 0, 1, 1, 1];

const findMaxConsecutiveOnes = function (nums) {
  // let oneCounter = 0;
  let acc = 0,
    res = 0;

  for (n of nums) {
    n === 0 ? (acc = 0) : acc++;
    if (acc > res) res = acc;
  }
  return res;
  // return oneCount;
};
```


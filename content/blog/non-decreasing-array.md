---
path: non-decreasing-array
date: 2021-04-04T16:16:37.005Z
title: Non-decreasing Array
description: LeetCode Question 665
---
## Problem statement

- - -

Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums\[i] <= nums\[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

### Example 1:

```js
Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
```

### Example 2:

```js
Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.
```

### Constraints:

```js
n == nums.length
1 <= n <= 10^4
-10^5 <= nums[i] <= 10^5
```

## Solution

- - -

 **A non-decreasing array is an array such that no number is smaller  then the number behind it.** 

> Process the elements in increasing order and decrease the current element whenever it can be done without making it less than the previous element. (The first element should thus always be decreased.) If at any point the current element is less than the previous element then no matter what operation is performed, the answer is “No”.`(1)`

```js

const nums = [4, 2, 3];

const checkPossibility = function (nums) {



  for (let i = 1; i < nums.length; i++) {


    if (nums[i] >= nums[i - 1]) {
      continue;
    }
    // if loop is at the beginning and the current int is >= 2 numbers behind it
    if (i === 1 || nums[i] >= nums[i - 2]) {
      nums[i - 1] = nums[i];
    } else {
      nums[i] = nums[i - 1];
    }
    if (++count > 1) {
      return false;
    }
  }
  return true;
};
```

### Sources 
- - -

[(1) Geeks for geeks ](https://www.geeksforgeeks.org/make-the-array-non-decreasing-with-the-given-operation/)
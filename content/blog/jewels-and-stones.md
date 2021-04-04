---
path: jewels-and-stones
date: 2021-04-04T16:35:39.572Z
title: Jewels and Stones
description: LeetCode Question 771
---
## Problem statement

- - -

You're given strings `jewels` representing the types of stones that are jewels, and stones representing the `stones` you have. Each character in stones is a type of stone you have. You want to know how many of the `stones` you have are also jewels.

Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

### Example 1:

```js
Input: jewels = "aA", 
stones = "aAAbbbb" Output: 3
```

### Example 2:

```js
Input: jewels = "z", 
stones = "ZZ" Output: 0
```

### Constraints:

* `1 <= jewels.length, stones.length <= 50 `
* ` jewels` and `stones` consist of only English letters.
* All the characters of `jewels` are **unique**.

## Solution

- - -

```js
let stones = "ZZ";
let jewels = "z";



var numJewelsInStones = function (jewels, stones) {
  let stoneCount = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        stoneCount++;
      }
    }
  }
  return stoneCount;
};
```
---
path: " shuffle-the-array"
date: 2021-03-29T15:04:04.322Z
title: " Shuffle the Array"
description: LeetCode 1470
---
# Question

- - -

Given the array nums consisting of `2n` elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`.

Return the array in the form `[x1,y1,x2,y2,...,xn,yn]`.

### Example 1:

```js
Input: nums = [2,5,1,3,4,7], n = 3 
Output: [2,3,5,4,1,7]  

Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7]. 
```

### Example 2:

```js
Input: nums = [1,2,3,4,4,3,2,1], n = 4 
Output: [1,4,2,3,3,2,4,1] 
```

### Example 3:

```js
Input: nums = [1,1,2,2], n = 2 
Output: [1,2,1,2]
```

### Constraints:

**1 <= n <= 500**  

**nums.length == 2n** 

**1 <= nums\[i] <= 10^3**

## Answer

- - -

**Definitions**

**Slice()**

The **`slice()`** method returns a **substr** from the **startIndex** to the **endIndex** in the **str**. `let substr = str.slice(startIndex [, endIndex ]); Code language: JavaScript (javascript)` The **startIndex** is a zero-based index at which the **`slice()`** start extraction.

The **endIndex** is also zero-based index before which the `slice()` ends the extraction. The **substr** will not include the character the **endIndex** index.

If you omit the **endIndex**, the `slice()` extracts to the end of the string.

**Push()**  

The `push()` method allows you to add one or more elements to the end of the array. 

```js
const shuffle = (nums, n) => {
  let x = nums.slice(0, n);
  let y = nums.slice(n);

  let finalAns = [];

  for (let i = 0; i < n; i++) {
    let currX = x[i];
    let currY = y[i];

    finalAns.push(currX, currY);
  }

  return finalAns;
};
```

- - -

### ***Sources***

*[Developer Mozilla ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)*

*[W3 Schools ](https://www.w3schools.com/jsref/jsref_replace.asp)*

[JavaScript Tutorial](https://www.javascripttutorial.net/)
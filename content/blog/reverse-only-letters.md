---
path: reverse-only-letters
date: 2021-04-02T23:27:40.931Z
title: Reverse Only Letters
description: LeetCode 917
---
## Question

- - -

Given a string `S`, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

### Example 1:

```js
Input: "ab-cd" 
Output: "dc-ba"
```

### Example 2:

```js
Input: "a-bC-dEf-ghIj" 
Output: "j-Ih-gfE-dCba"
```

### Example 3:

```js
Input: "Test1ng-Leet=code-Q!" 
Output: "Qedo1ct-eeLg=ntse-T!"
```

#### Note:

1. S.length <= 100 
2. 33 <= S \[i].ASCIIcode <= 122
3. S doesn't contain \ or "

## Answer

- - -

**Regular expressions** - patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. 

Using a regular expression literal, which consists of a pattern enclosed between slashes as follows:

let regExp = /^\[a-zA-Z]+$/;   from our answer.

```js
let str = "ab-cd";
let regExp = /^[a-zA-Z]+$/;



var reverseOnlyLetters = function (S) {
  // check if str or not

  for (let i = 0; i < S.length; i++) {
    let newArr = [];

    if (regExp.test(S[i])) {
      newArr.push(S[i]);
    } else {
      return "this is not a reg", S[i];
    }
    return newArr;
  }
};



console.log(reverseOnlyLetters(str));
```

## Sources
---

[Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
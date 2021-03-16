---
path: defanging-an-ip-address
date: 2021-03-16T21:37:10.655Z
title: Defanging an IP Address
description: LeetCode Question 1108.
---
## Question

- - -

Given a valid (IPv4) IP `address`, return a defanged version of that IP address.

A defanged IP address replaces every period `"."` with `"[.]"`.

### Example

```js
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
```

```js
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
```

### **Constraints:**

The given `address` is a valid IPv4 address.

```js
      var newStr = address.replace(/\./g, "[.]");

  return newStr
    
};
```

## Definitions

#### Regular expressions

Regular expressions are patterns used to match character combinations in strings.  Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

#### Replace()

The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

## Answer

- - -

```js
let address = "1.1.1.1";

var defangIPaddr = function (addy) {
  var newStr = addy.replace(/\./g, "[.]");

  console.log(newStr);
};

console.log(defangIPaddr(address));

// 1[.]1[.]1[.]1[.]1[.]1
```

- - -

***Sources***\
*[Developer Mozilla ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)*\
*[W3 Schools ](https://www.w3schools.com/jsref/jsref_replace.asp)*
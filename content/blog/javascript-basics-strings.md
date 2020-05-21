---
path: javascript-strings
date: 2020-05-21T15:11:29.609Z
title: "JavaScript Basics: Strings"
description: The String global object is a constructor for strings or a sequence
  of characters.
---
<!--StartFragment-->

The JavaScript string Primitive type. JavaScript strings are also immutable. It means that if you process a string, you will always get a new string. The original string doesn’t change.

In fundamentals we learned what strings are, here is a quick refresher of a string literal.

`let str ='Hi';`

`let greeting ="Hello";`

In ES6 we can define strings with backticks ``(`)`` called template literals. They enable you to solve more complex problems, ES6 template literals provide the syntax that allows you to work with strings in a safer and cleaner way.

You can use multi-line strings and string interpolation features with them.

```js
`string text`

`string text line 1
 string text line 2`

let name = 'John'; 
let message `Hello ${name}`; 
console.log(greeting); // 
Hello John
```

## Escaping special characters

To escape special characters, you use the backslash `\` character.  The following example uses the backslash character to escape the single quote character in a string: 	`let str = 'I'm a string!';`

## Accessing characters

To access the characters in a string, you use the array-like `[]` notation with the zero-based index.

```js
let str = "Hello";\
console.log(str\[0]); // "H" 
```

To access the last character of the string, you use the length - 1 index:

```js
let str = "Hello"; \
console.log(str\[str.length -1]); // "o"
```

## Concatenating strings

To concatenate two or more strings, you use the + operator:

```js
let name = 'John';
let str = 'Hello ' + name;
console.log(str); // "Hello John"
```

## Comparing strings

To compare two strings, you use the operator `>, >=, <, <=, and ==` operators.

```js
let result = 'a' < 'b';
console.log(result); // true
```

## String Type

To get the primitive string value, you use one of the following methods of the string object: `valueOf(),` `toString()`, and `toLocaleString()`.

console.log(str.valueOf ());

console.log(str.toString ());

console.log(str.toLocaleString());

## String manipulation

The String type provides many useful methods for manipulating strings effectively. We will examine each of them in the following section. Concatenating 

To concatenate two or more strings you use the `concat()` method as follows: 

```js
let firstName = 'John';
let fullName = firstName.concat(' ','Doe');
console.log(fullName); // "John Doe"
console.log(firstName); // "John"
```

## Locating 

To locate a substring in a string, you use the indexOf() method: 	

`string.indexOf(substring,[fromIndex]);`

The indexOf() method accepts two arguments: a substring to locate and the fromIndex at which the method starts searching forward in the string.

```js
let str = "This is a string"; 
console.log(str.indexOf("is")); // 2
```

## Removing whitespace characters

To remove all leading and trailing whitespace characters of a string, you use the `trim()` method. 	

```js
let rawString = ' Hi  '; 
let strippedString = rawString.trim(); 
console.log(strippedString); // "Hi"
```

Note that the `trim()` method creates a copy of the original string with whitespace characters stripped, it doesn’t change the original string. 	

ES6 introduced two new methods for removing whitespace characters from a string:

* `trimStart()` returns a string with whitespace characters stripped from the beginning of a string.
* `trimEnd()`returns a string with the whitespace characters stripped from the end of a string.

## `slice()` Method

The `slice()` method returns a substr from the `startIndex`to the `endIndex`in the str:

```
let substr = str.slice(startIndex [, endIndex ]);
```

The `startIndex`is a zero-based index at which the `slice()` start extraction.

The endIndex is also zero-based index before which the slice() ends the extraction. The substr will not include the character the endIndex index.

If you omit the endIndex, the `slice()` extracts to the end of the string.

If the startIndex or endIndex is negative, the `slice()` treats it as `str.length` + `startIndex` or `str.length`+ `endIndex`e.g., if `startIndex` or `endIndex`is -1, the `slice()` will treat it as `str.length - 1`.

The `slice()` returns a new string that contains the substring extracted from the string.  example

Let’s take an example of using the `slice()` method. The following example uses the`slice()` method to get the local part of an email address:

```js
let email = 'john@example.com'
let localPart = email.slice(0,email.indexOf('@'));  
console.log(localPart); // John
```

## `split()` Method

The `String.prototype.split()` divides a string into an array of substrings: 

```split``separator``limit```;

### Separator

The separator determines where each split should occur in the original string. It can be a simple string or a regular expression.

If you omit the separator or the `split()` cannot find the separator in the string, the `split()` returns the entire string.

### Limit

The limit parameter is zero or positive integer that specifies the number of substrings. The `split()` method will stop when the number of substrings equals to limit.

If the limit is zero, the `split()` returns an empty array. If the limit is 1, the split() returns an array that contains the string.

### Example

Splitting the strings into words example.The following example uses the `split()` method to split the string into words

```
let str = 'JavaScript String split()'; 
let substrings = str.split(' ');  
console.log(substrings);
// ["JavaScript", "String", "split()"]
```

Returning a limited number of substrings example

The following example uses the split() method to divide a string into substrings using the space separator. It also uses the second parameter to limit the number of substrings to two:

```
let str = 'JavaScript String split()'; 
let substrings = str.split(' ',2);  
console.log(substrings);
// ["JavaScript", "String"]
```

## Summary

* Use the JavaScript String `split()` to divide a string into an array of substrings by a specified separator.
* Use the second parameter `(limit)` to return a limited number of splits.
* JavaScript strings are primitive values and immutable.
* Literal strings are delimited by single quotes `(')`, double quotes` (")`, or backticks ``(`)``
* The length property returns the length of the string.
* Use the `>, >=, <, <=, ==` operators to compare two strings.
---
path: javaScript-fundamentals
date: 2020-05-22T21:12:23.458Z
title: "JavaScript Basics: Fundamentals"
description: "Let us take a step back from all the Frameworks and let's have a
  JavaScript refresher to strengthen our foundation! "
---
## Hello Welcome to the first post of my JavaScript series!

I'm writing this blog to go back to basics and strengthen my knowledge of JavaScript. This will be a really good refresher for more advanced Devs and a good place to start for beginners. 

I will start with the very fundamentals of the language: variables and data types, control flow, string, arrays, etc.. 

Then I will get into more complex topics: ES6, OOP, Promises, Asynchronous JavaScript and much more!  I'm hoping to include Practice questions so you can apply the knowledge learned into actual problems!

<!--StartFragment-->

**This post will focus on the following:** *Variables, Constants, Primitive types, Dynamic typing, Operators*

<!--EndFragment-->

<!--StartFragment-->

## **Variables**

The most fundamental concept in not only JavaScript but in all programming languages.

We use variables to store data in a computer's memory. We give that memory location a name so we can read the data at that given location in the future.

Think of variables as containers or boxes used for organization, to easily find whats packed away your boxes will have to be labeled. What we put inside the box is the value(data) of the variable and what we label the box is the name of our variable.

#### ***Variables cannot be a reserved keyword***

***Variable names should be descriptive***\
***Variables cannot start with a number***\
***Variables cannot contain space of hyphen***

`var` was the most commonly used variable declaration before ES6, there are some issues with `var` and those will be addressed later on. From ES6 onward the best practice is to use `let` to declare variables.

<!--EndFragment-->

<!--StartFragment-->

### Structure of a declaration

```js
// Declaration Variable name = value;
// Declaration - 'let'
// Variable name - 'name'

let name;
console.log(name) 
// undefined - by default variables are undefined
```

We can initialize this variable a name 'James' that is a string

```js
let name = 'James'
console.log(name) 
// James
```

<!--EndFragment-->

<!--StartFragment-->

## Constants

With `let` you can change the value throughout the program

```js
let name = 'James'
name = 'Mike'
console.log(name) // Mike`
```

If you want to store a value in a variable and intend for that value not to change throughout the program we use the declaration `const`

**We cannot reassign a constant**

If variable needs to be reassigned use let

If variable does not need to be reassigned use const

```js
const name = 'James'
name = 'Mike'
console.log(name)
// TypeError: assignment to constant variable
```

<!--EndFragment-->

<!--StartFragment-->

- - -

## **Data Types**

JavaScript has 6 primitive data types.

### **String**

Sequence of zero or more characters and begins and ends with a single quote (') or a begins and ends with a double quote ("), both cannot be used on the same string.

```js
let greeting = 'Hello World'; // single quote 

let name = "John"; // double quote 
```

### **Number**

JavaScript uses the[ IEEE-754](https://en.wikipedia.org/wiki/IEEE_754) format to represent both integer and floating-point numbers. To represent octal ( base 8 ) literals, you put the first digit as zero (0) followed by octal digit numbers ( 0 to 7 )

```js
let octal = 011; // octal for 9

let num = 020; // octal for 7
```

minimum and maximum numbers can be accessed by using Number.MIN_VALUEandNumber.MAX_VALUE

finite numbers are accessed with Infinity and - Infinity

### **Boolean**

Has two values true and false

`let isApproved = true;`

value can be true or false

### **undefined**

```js
let foo;

console.log(foo); // undefined

console.log(typeof foo); // undefined

let firstName; // if it is not initialized its value is undefined

let firstName = undefined; // explicitly set to undefined not common
```

### **null**

`let firstName = null;`  Used when we want assign a variable later we it is good practise to assign it null

### **symbols (ES6)**

Does not have a literal form. To create a symbol you call the function

`let sym = Symbol()`

Symbol is not a constructor function so the 'new' syntax is not supported

creates a new unique value each time it is called

A symbol value may be used as an identifier for object properties; this is the data type's primary purpose, although other use-cases exist, such as enabling opaque data types, or serving as an implementation-supported unique identifier in general.[](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)

```js
let sym1 = Symbol()

let sym2 = Symbol('foo')

let sym3 = Symbol('foo')

*A new symbol is created each time*

Symbol('foo') === Symbol('foo') // false
```

### **JavaScript is a dynamic language**

**Static**- variable declarations cannot be changed in the future.

**Dynamic**- declarations can be changed in the future. type of variables will be determined at run time based on the values we assigned to them.

```js
let name = 'James';
typeof name
// "string"

name = 1
typeof name
// "number"
```

Still a number. In JavaScript we do not have multiple types of numbers we only have one

```js
name = 1.1
typeof name
// "number"
```

## **Operators**

Simplest operators are unary operators. A unary operator works on one operand.

Unary plus (+) – convert an operand into a number

Unary minus (-) – convert an operand into a number and negate the value after that.

```js
let a = 10;
a = +a; // 10
a = -a; // -10

prefix / postfix increments (++) – add one to its operand

prefix / postfix decrements (--) – subtract one from its operand.
```

## Assignment operators

The basic assignment operator is equal (=):

| Operator | Meaning     | Description                                      |
| -------- | ----------- | ------------------------------------------------ |
| a = b    | a = b       | Assigns the value of b to a.                     |
| a += b   | a = a + b   | Assigns the result of a plus b to a.             |
| a -= b   | a = a - b   | Assigns the result of a minus b to a.            |
| a *= b   | a = a*  b   | Assigns the result of a times b to a.            |
| a /= b   | a = a / b   | Assigns the result of a divided by b to a.       |
| a %= b   | a = a / b   | Assigns the result of a modulo b to a.           |
| a &=b    | a = a % b   | Assigns the result of a AND b to a.              |
| a=b      | a = a & b   | Assigns the result of a OR b to a.               |
| a ^=b    | a =a ^ b    | Assigns the result of a XOR b to a.              |
| a <<= b  | a = a << b  | Assigns the result of a shifted left by b to a.  |
| a >>= b  | a = a >> b  | Assigns the result of a shifted right by b to a. |
| a >>>= b | a = a >>> b | Assigns the result of a shifted right by b to a. |

## Comparison operators

<!--StartFragment-->

| <   | Less than                |
| --- | ------------------------ |
| \>  | Greater than             |
| <=  | Less than or equal to    |
| \>= | Greater than or equal to |
| \== | Equal to                 |
| !=  | Not equal to             |

<!--EndFragment-->

<!--EndFragment-->

## logical Operators

`(!)` The NOT operator  negates a boolean value. The`(!!)`converts a value into its real boolean value.

`(&&)` The AND operator is applied to two Boolean values and returns true if both values are true.

`(||)` The OR operator is applied to two Boolean values and returns true if one of the operands is true.

Both `&&` and `||` operator are short-circuited. They can be also applied to non-Boolean values.

The logical operator precedence from the highest to the lowest is `!`, `&&` and `||`.
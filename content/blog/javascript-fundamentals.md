---
path: javaScript-fundamentals
date: 2020-05-20T21:12:23.458Z
title: JavaScript Fundamentals
description: "Let us take a step back from all the Frameworks and let's have a
  JavaScript refresher to strengthen our foundation! "
---
#### Hello Welcome to the first post of my JavaScript series!

I'm writing this blog to go back to basics and strengthen my knowledge of JavaScript. This will be a really good refresher for more advanced Devs and a good place to start for beginners. 

I will start with the very fundamentals of the language: variables and data types, control flow, string, arrays, etc.. 

Then I will get into more complex topics: ES6, OOP, Promises, Asynchronous JavaScript and much more!  I'm hoping to include Practice questions so you can apply the knowledge learned into actual problems!

<!--StartFragment-->

##### This post will focus on the following:

   1. **Variables**
   2. **Constants**
   3. **Primitive types**
   4. **Dynamic typing**
   5. **Operators**

<!--EndFragment-->

<!--StartFragment-->

## **Variables**

The most fundamental concept in not only JavaScript but in all programming languages.

We use variables to store data in a computer's memory. We give that memory location a name so we can read the data at that given location in the future.

Think of variables as containers or boxes used for organization, to easily find whats packed away your boxes will have to be labeled. What we put inside the box is the value(data) of the variable and what we label the box is the name of our variable.

 *Variables cannot be a reserved keyword* 

*Variable names should be descriptive*

*Variables cannot start with a number*

*Variables cannot contain space of hyphen*

`var`was the most commonly used variable declaration before ES6, there are some issues with `var` and those will be addressed later on. From ES6 onward the best practice is to use `let`to declare variables.

<!--EndFragment-->

<!--StartFragment-->

##### Structure of a declaration

Declaration Variable name = value;

```js
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

---

## **Constance**

With `let` you can change the value throughout the program

```js
let name = 'James'
name = 'Mike'
console.log(name) // Mike`
```

If you want to store a value in a variable and intend for that value not to change throughout the program we use the declaration `const`

```js
const name = 'James'
name = 'Mike'
console.log(name)
// TypeError: assignment to constant variable
```

**We cannot reassign a constant**

If variable needs to be reassigned use let

If variable does not need to be reassigned use const

<!--EndFragment-->
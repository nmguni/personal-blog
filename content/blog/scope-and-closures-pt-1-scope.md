---
path: javascript-scope
date: 2020-06-12T12:09:47.507Z
title: "Scope and Closures pt 1: Scope"
description: "Scope and closures are a significant part of understanding
  JavaScript, they can also be incorporated in interview questions. "
---
Scope and closures are a significant part of understanding JavaScript, they can also be incorporated in interview questions. This was a very tricky topic when I first started and to some extent, it still is to this day. Let me explain what they are with some examples to help us gain a better understanding of them.

## Let’s start with scopes.

Scope is where a variable is visible. Variables are not visible outside of a function in which they are declared.  

There are three types of scope, **Global**, **Block** and **Function scope**.

## Global

Variables defined outside of a function or block are said to have global scope. Variables in global scope can be accessed from anywhere in the application. 

```js
// the scope is by default global
var name = 'Goku';
```

## Block

Variables defined inside an area of curly braces `{ }` have block scope. Block statements like `if/else` and `switch` or conditions `for` and `while loops` unlike functions don't create a new scope, variables defined inside of these statements will be scoped within the conditions/loops.

Variables `let` and `const` have block scope, they can only be accessed in the scope they are defined. 

```js
let x = 1;
Const y = 8
{ 
  let x = 2;
  Const y = 4;
}
console.log(x); //1
console.log(y); //8
```

**Var does not have block scope.**

```js
Var x = 1;
{ 
  Var x = 2;
}
console.log(x); //2
```

## Function

Variables defined in a function are scoped to that function meaning they are visible anywhere within the function but are not visible from outside of the function. 

This means variables with the same names can be in two different functions, each variable scoped to their respective function and are too accessible in other functions. Knowing that still try to come up with different names for variables!

```js
// Global Scope
function foo() {
    // Local Scope #1
    function bar() {
        // Local Scope bar neasted inside of foo
    }
}

// Global Scope
function fooBar() {
    // Local Scope 
}


function fruits(){
    var fruit ='mango';
    console.log('inside function: ',fruit);
}

foo();                    //inside function: mango
console.log(fruit);       //error: fruit is not defined

// Cannot log fruit because it is scoped to the fruit function
// fruit is not visible from outside of the function
```

**Let’s declare a `var` variable within a function body.**

```js
function run() {
  // "run" function scope
  var message = 'Run, Forrest, Run!';
  console.log(message);
}
run();  // Run, Forrest, Run!

console.log(message); // throws ReferenceError
```

`run() function` body creates a scope. The variable message is accessible inside of the function scope, but inaccessible outside. Same way, a function body creates a scope for `let`, `const` and even function declarations.

```js
function cars() {
  // "cars" function scope
  const german = 'BMW';
  let amarican  = 'FORD;
  function horsePower() {}

  console.log(german);   // BMW
  console.log(amarican); // FORD
  console.log(horsePower);  // function
}

cars();
console.log(german);   // throws ReferenceError
console.log(count); // throws ReferenceError
console.log(run2);  // throws ReferenceError
```

## Module

Variables defined in a module are only visible to that module not others.

### What is a module?

A file is considered to be one module. For example you can import two scripts or ‘files’ into the index page of your application, these are 2 separate modules.

```html
<script type="module" src="user.js"></script>
<script type="module" src="hello.js"></script>
```

To make variables or even functions that are scoped in the user module available in the hello module we will have to use the `import` and `export` methods.

Modules can load each other and with the use of `export` and `import` to interchange functionality, call functions of one module from another one.  

**`Exporting` makes the variables available to other modules.**

```js
// in user.js module
Export { greeting, users } 
```

**Importing makes variables or functions and objects available in the current module.**

```js
// in hello.js modules
Import   { greeting, users }  from “./users”
```

Modules are expected to export what they want to be accessible from outside and import what they need.

### Scopes can be nested

An interesting property of scopes is that they can be nested. Scope can be nested inside of another scope and code inside the innermost scope can access variables from outer scope.

In the following example the function kobe`()` creates a scope, and inside an if condition code block creates another scope:

```js
function kobe() {
  // "kobe" function scope
  const message = 'Pass me the ball!';

  if (true) {
    // "if" code block scope
    const teammate = 'Shaq';
    console.log(message); // 'Pass me the ball!'
  }

  console.log(teammate); // throws ReferenceError
}

run();
```

If code block scope is nested inside the `kobe()` function scope. Scopes of any type (code block, function, module) can be nested. The scope contained within another scope is named inner scope. In the example, if code block scope is an inner scope of `Kobe()` function scope. The scope that wraps another scope is named outer scope. In the example, `kobe()` function scope is an outer scope to if code block scope.

## Hoisting

#### Raised or placed on top of.

Variable and function declarations are processed before any code is executed. The browser takes the variable specifically `var` and functions declarations and places them at the top of the scope before execution from `var` and  from functions out of the code and places them at the top of the file.

> “Wherever functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.”

Hoisting only moves the declaration. The assignments are left in place.

A named function gets taken out and hoisted to the top of the file.

```js
// The function was defined after it was called and this will run because of hoisting. 
// When we run this script the variable declaration moves to the top of the code.

 greeting() 

Function greeting() {  
  console.log(‘hello world’)
}
```

### Downside ?

When we hoist it takes up space inside the browser and it will slow down code, not very noticeable unless there is a lot of JavaScript running on the page.

Generally we want to avoid hoisting. How do we avoid hoisting?  We can use anonymous functions instead of named functions because named functions are always hoisted.

Function declarations are hoisted to the top.

```js
hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};
```

**Function expressions are not hoisted.**

```js
expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};
```

**Function expression combined with decloraton.**

```js
expression();

var expression = function hoisting() {
  console.log('Will this work?');
};

//TypeError: expression is not a function
```

The declaration var expression it hoisted to the top but its assignment to a function is not. A type error will be thrown sense it sees expression as a variable not a function 

Hoisting is for variables defined with var in block scope or function names defined using function keyword. Variables defined with var inside function-level scope cannot be hoisted Let and const are not hoisted and ramin scoped to where they were defined.

_____

## Summary

**Global scope** - Variables in global scope can be accessed from anywhere in the application. 

**Block scope** -Variables let and const have block scope, they can only be accessed in the scope they are defined.

**Function scope** - Variables defined in a function are scoped to that function they are visible anywhere within the function but are not visible from outside of the function.

**Module** - Variables defined in a module are only visible to that module not others. Export and import can be used to make certain variables and function visible to other modules 

**Nested scope** - Scope can be nested inside of another scope and code inside the innermost scope can access variables from outer scope.

**Hoisting** - Var and function declarations are moved to the top of the scope
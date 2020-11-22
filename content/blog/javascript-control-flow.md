---
path: javascript-control-flow
date: 2020-07-10T13:02:49.138Z
title: "JavaScript Basics: Control Flow "
description: Control flow is the order in which statements are executed in a program...
---
<!--StartFragment-->

Control flow is the order in which statements are executed in a program. The default control flow is for statements to be read and executed from top to bottom. Control flow structures such as conditionals alter control flow by only execution blocks of code if certain conditions are met. This allows a program to make decisions about which code is executed as the program runs.

## **Conditional statements**

### if else

Accepts a condition and if that condition evaluates to true then code within its code body executes. If the condition evaluates to false the code with not be executed

```js
if (condition ){
    statement 
} else if (anotherCondtion) {
    statement
} 

// EXAMPLE
let x = 20
if(x > 10) {
console.log('x is greater than 20')
}
```

This example first initializes the variable x to 25.  The x > 10 expression evaluates to true, therefore the script shows a message in the console window. In case you want to execute another statement when the condition evaluates to false, you use the else as follows:

```js
if( condition ) { 
  // statement 
} else {  
  // statement (when condition evaluates to false) 
}

let x = 5; 
if (x > 10) { 
    console.log('x is greater than 10'); 
} else { 
    console.log('x is less than or equal 10'); 
}
```

### Ternary operator

Short had for if else statement  `condition ? expression_1 : expression_2` f the condition evaluates to true, the operator returns the value of the `expression_1`; otherwise, it returns the value of the `expression_2.`

```js
// Only register if the age is greater than 18
var allowRegister = age > 18 ? true : false;

// If customer has more than 100 points they are gold otherwise they are silver 
let points = 110;
let type = points > 100 ? "glod": "silver";
console.log(type) // gold
```

## Switch

**Similar to if and else.**  With switch and case we can compare the value of a variable against  other values. 

`Break` keyword causes the execution to jump out of the switch statement. If you omit the `break` keyword, the code execution falls through the original case into the next one. If the expression does not match any value, the `default_statement` will be executed. It behaves like the `else` block in the `if else` statement.

```js
switch
 (expression) {    
case
 value_1:
        statement_1;
break   
case
 value_2:
        statement_2;        
break;
case
 value_3:
        statement_3;
break;
default:
        default_statement;
}

let lan = 'Node'
// case compares value of variable with something
switch(lan) {
    case 'JavaScript':
        console.log('FrontEnd');
        break;
    case 'Node':
        console.log('BackEnd');
        break
    default:
        console.log('unknown');
}
```

Loops Used to repeat and actions  a number of times. If JavaScript we have various types of loops and they all do the same thing, they repeat an action a number of times. But there are differences to how they start  and end for used to repeat and actions  a number of times 

```js
for
( ; ; ) {
// statements
}

for (initalExpression; condition; incrementExpression ){
    statements 
}
```

**Initialization**

The initialization expression initializes the loop. The initialization expression is executed only once when the loop starts. You typically use the initialization is to initialize a counter variable. If you use the var keyword to declare the counter variable, the variable will have either function or global scope. In other words, you can reference the counter variable after the loop ends. However, if you use the let keyword to declare the counter variable, the variable will have a blocked scope, which is only accessible inside the loop.

**Condition**

The condition is an expression that is evaluated once before every iteration. The statement inside the loop is executed only when the condition evaluates to true. The loop is terminated if the condition evaluates to false. Note that the condition is optional. If you omit it, the for loop statement considers it as true.

**Increment Expression** 

The for loop statement also evaluates the post-expression after each loop iteration. Generally, you use the post-expression to update the counter variable. The following flowchart illustrates the for loop:

print hello world 5 times to console 

```js
without loop
console.log(''hello world'')
console.log(''hello world'')
console.log(''hello world'')
console.log(''hello world'')
console.log(''hello world'')
```

**With a loop** 

```js
for(let i = 0; i < 5; i++) { 
    console.log('hello world') 
    }
```

**How it works.**

1. Declare a variable  counter and initialize it to 1.
2. Display the value of counter in the Console window if counter is less than 5.
3. Increase the value of counter by one in each iteration of the loop.

**loop with condition** 

```js
for (let j = 1;; j += 2) {
    console.log(j);
    if (j > 10) {
        break;
    }
}
// 1
 3 5 7 9 11
```

## while

In a for loop the loop variable is part of the loop itself  In why loops we declare variable external

```js
let i = 0
while (condtion) { 
  statements; 
}
```

If the expression evaluates to true, the while statement executes the statement. If the expression evaluates to false, execution continues with the statement after the while loop. The while loop evaluates the expression before each iteration, therefore, the while loop is known as a pretest loop. For this reason, it is possible that the statement inside the while loop is never executed.

```js
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}
 
// 1 3 5 7 9
```

**How it works**

1. outside of the loop, the count variable is set to 1.
2. Before the first iteration begins, the while statement checks if count is less than 10 and execute the statements inside the loop body.
3. In each iteration, the loop increments count by 2 and after 5 iterations, the condition count < 10 is no longer true, so the loop terminates.

## do while

Do while loops are always executed at least once even if condition evaluates to false  Unlike the while loop, the do-while loop always executes the body at least once before it evaluates the expression.

```js
do{
  statement(s);
} while(expression);

let count = 0; do {
    count++;
    console.log('count is:' + count);
} while (count < 10 );
```

In this example, the count variable is set to 0 and is incremented by one in each loop iteration. The loop continues as long as the count is less than 10.

The most typical example of using the do-while loop is getting input from the user until the value provided is expected.

## Break and Continue

**`Break`** - jump out of a loop . The break statement terminates the loop immediately and passes control over the next statement after the loop. Here’s an example:

`Continue`- jump to the next iteration  Similar to the break statement, the continue statement has two forms: labeled and unlabeled. For more information on the label statement, see the break statement tutorial. unlabeled continue statement skips the current iteration of a `for`, `do-while`, or `while loop`. The continue statement skips the rest of the code to the end of the innermost body of a loop and evaluates the expression that controls the loop.

The continue statement can include an optional label as follows: `continue label;` The label can be any valid identifier.

```js
// continue with a label
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if ((i == 2) && (j == 2)) {
            console.log('continue to outer');
            continue outer;
        }
        console.log("[i:" + i + ",j:" + j + "]");
    }
}

// unlabeled 

let i = 0; 
while(i <=10)  {
    if(i === 5 ) break // jum out of lo
    console.log(i)
    i++
}

let i = 0;  
while(i <=10)  { 
    if(i % 2 === 0 ) { 
        i++ 
        continue 
    }  

    console.log(i) 
    i++ 
}
	
```

<!--EndFragment-->
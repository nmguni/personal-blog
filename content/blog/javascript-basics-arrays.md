---
path: javascript-arrays
date: 2020-06-12T14:55:06.209Z
title: "JavaScript Basics: Arrays"
description: The JavaScript Array class is a global object that is used in
  the construction of arrays; which are high-level, list-like objects.
---
![js png image](assets/code4.png "js png image")





![js jpg image](assets/script.jpg "js jpg image")

The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

<!--StartFragment-->

Arrays can hold data of different types ( null, undefined, boolean, number, string, symbol-ES6 ) and can hold objects as well. The length of an array is dynamic and data can be stored at any location ( index ) in the array.

<!--EndFragment-->

## Creating Arrays

The most common way to create an array is the array literal notation. This notation uses square brackets `[   ]`   to wrap a comma separated list if elements.

```js
let array_name = [element1, element2, element3];

// cars
let cars = ['Honda', 'Toyota', 'Ford'];

// Empty array
let arrayName = [];

// Array of undefined elements 
let arrayName = [, , ,];
```

## Finding Elements

Arrays are numbered using a 0 based index. The first element starts a 0 then the second element is 1 and so on. We can use bracket notation to access the elements of an array.

```js
// cars
let cars = ['Honda', 'Toyota', 'Ford'];

console.log(cars[0] // 'Honda'
console.log(cars[1] // 'Toyota'
console.log(cars[2] // 'Ford'
```

## Find Array size

We can use the length property  to store the current number of elements is holds.

```js
console.log(cars.length) // 3
```

## Adding elements to an array

### Adding to the beginning unsift()

```js
let cars = ['Honda', 'Toyota', 'Ford'];
cars.unshift('') 
// ['Tesla', 'Honda', 'Toyota', 'Ford']
```

### Removing from the beginning shift()

```js
let cars = ['Tesla','Honda', 'Toyota', 'Ford'];
cars.shift()
console.log(cars)
// ['Honda', 'Toyota', 'Ford' ];
```

### Deleting using splice()

Allows you to add new elements to the middle of the array however you can use this method to delete and replace existing elements. `splice()` changes the original array and returns an array that contains the deleter elements.

```js
let cars = ['Tesla','Honda', 'Toyota', 'Ford'];

let deletedCars = cars.splice(0, 2)
console.log(deletedCars) 
// ['Tesla','Honda'];

console.log(cars)
// ['Toyota', 'Ford'];
```

```js
Array.splice(position,num);
```

**Position** - position of the first element to delete  num - the number of elements to delete.

### Adding with splice()

```js
Array.splice(position,0,new_element_1,new_element_2,...);
```

**Position** -   starting position in the array that the new elements will be inserted. The second argument is zero (0) that instructs the `splice()` method to not delete any elements. The third argument, fourth argument, and so on are the new elements that are inserted into the array. `splice()` does not remove any elements therefore it returns an empty array.

```js
let cars = ['Tesla','Honda', 'Toyota', 'Ford'];
cars.splice(2,0,'Civic','Tacoma')
console.log(cars)
// ["Tesla", "Honda", "Civic", "Tacoma", "Toyota", "Ford"]
```

### Empty array with Splice()

```js
let cars = ['Tesla','Honda', 'Toyota', 'Ford'];
cars.splice(0, cars.length)
console.log(cars)
// [ ];
```

## Slice()

Remove elements from an array and add them to another array.

```js
slice(start, stop);
```

**Start** and **stop** parameters are optional  The start parameter determines the zero-based index at which to start extraction. If the start is undefined, `slice()` begins at 0.

 **Stop** parameter, as its name implies, is a zero-based index at which to end extraction. The `slice()` method extracts up to stop-1. It means that the `slice()` method doesn’t include the element at the stop position in the new array.

If you omit the **stop** parameter, the `slice()` method will use the length of the array for the stop parameter.

The `slice()` returns a new array that contains the elements of the original array clone Array `slice().`

```js
let cars = ['Tesla','Honda', 'Toyota', 'Ford'];
let carsClone = cars.slice();
console.log(newCars)
// ["Tesla", "Honda", "Toyota", "Ford"]
```

### Copy a portion using slice()

```js
let cars = ['Tesla','Honda', 'Toyota', 'Ford'];
let carsCopy = cars.slice(0, 3);
console.log(newCars)
// ["Tesla", "Honda", "Toyota"]
```

## Adding to the end push()

Adds elements to the end of an array.

```js
let cars = ['Tesla','Honda', 'Toyota', 'Ford'];
cars.push('Volvo')
console.log(cars)
// ['Tesla','Honda', 'Toyota', 'Ford', 'Volvo'];
```

## Removing from the end pop()

```js
let cars = ['Tesla','Honda', 'Toyota', 'Ford'];
cars.pop()
console.log(cars)
// ['Tesla','Honda', 'Toyota', ];
```

### Empty an array with pop()

```js
while( num2.length > 0 ) num2.pop()
```

## Locate elements in an array index() lastIndexOf()

`indexOf()` Finds position of an element in an array. Returns the first index of the occurrence or it returns -1 if the element is not found.

```js
Array.indexOf(searchElement, fromIndex)
```

**searchElement** -  element that you want to find in the array.  fromIndex - array index at which the function starts the search.

If you omit the **fromIndex** argument, the `indexOf()` method starts searching from the beginning of the string.

`indexOf()` method uses the strict equality comparison algorithm that is similar to the triple-equals operator **(===)** when comparing the **searchElement** with the elements in the array.

```js
var foo = [1, 2, 3, 4, 5, 7];
console.log(scores.indexOf(1)); // 0
console.log(scores.indexOf(3)); // 2
console.log(scores.indexOf(6)); // -1
console.log(scores.indexOf(2)); // 1
```

## lastIndexOf()

```js
Array.lastIndexOf(searchElement[, fromIndex = Array.length - 1])
```

`lastIndexOf()` method returns the index of the last occurrence of the **searchElement** in the array. It returns -1 if it cannot find the element.

Different from the `indexOf()` method, the `lastIndexOf()` method searches for the element backward, starting at fromIndex.

```js
var foo = [1, 2, 3, 4, 5, 7];
foo.lastIndexOf(7)
// 5
```
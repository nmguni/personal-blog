---
path: object-oriented-programming
date: 2020-06-09T12:53:33.692Z
title: "Object-oriented programming (OOP) "
description: Object-oriented programming (OOP) is a programming paradigm based
  on the concept of “objects”, which may contain data, in the form of fields...
---
The four pillars of Object-Oriented Programming are quite popular when it comes to front-end interviews, as a result, I'm writing this article to thoroughly understand OOP and to help others on their journey as well.

I will cover the four pillars of Object-Oriented Programming in the post then continue this series into more complex topics such as Prototypes, Prototypical Inheritance, and ES6 Classes.

<!--StartFragment-->

## What is OOP?

**NOT a programming language!**

OOP is programming or a style of programming centered around objects rather than functions.

Objects interact with each other through methods and properties.

Objects are used to store data, structure applications into modules and keep code clean.

> *“ Object-oriented programming (OOP) is a programming paradigm based on the concept of “objects”, which may contain data, in the form of fields, often known as attributes and code, in the form of procedures, often known as methods.” — [Wikipedia](https://en.wikipedia.org/wiki/Object-oriented_programming)*

## 4 Pillars of Object-oriented Programming

#### There are four main concepts of OOP, there are Encapsulation, Abstraction, Inheritance, and Polymorphism.

### Before OOP we had Procedural Programming ( PP )

> *“ Procedural programming is a programming paradigm, derived from structured programming, based upon the concept of the procedure call. Procedures, also known as routines, subroutines, or functions, simply contain a series of computational steps to be carried out.” — [Wikipedia](https://en.wikipedia.org/wiki/Procedural_programming)*

Also known as inline programming takes a top-down approach. It is about writing a list of instructions to tell the computer what to do step by step. It relies on procedures or routines.

Divided a program into functions. We had data stored in variables and functions that operate on the data. As the program grows you will end up with a bunch of functions that are all over the place. You can make a change to one function then several other functions brake ( too much interdependence between functions ). OOP Solved this problem.

## Encapsulation

In OOP we group related functions and variables together into an object. Functions in objects are called methods and variables are called properties.

### Encapsulation Example

Here we have three variables and below that, we have a function that produces a greeting. This type of implementation is called procedural. Variables on one side and functions on the other.

```js
let firstName = 'Tony'
let lastName = 'Montana'
let age= 30

function greeting() (firstName, lastName, age) {
    return `Hello my name is ${firstNname} ${lastName} and I just turned ${age}`
};
```

Here is the OOP way of doing things. We start off by creating a person object and filling it with the variables a functions we defined up above. Why is this better ? 

* Few to no parameters. All the parameters are properties are highly related and are apart of the the person object. Fewer the number of parameters the easier it is to maintain that function.

```js
const person = {
  name: "Tony Montana",
  age: 30,
  gender: "male",
  interests: "Football",
  bio: function () {
    console.log(
      `${this.name} is ${this.age} years old. He likes ${this.interests}.`
    );
  },
  greeting: function () {
    console.log(`Hi I'm ${this.name}`);
  },
};
person.bio(); // Tony Montana is 30 years old. He likes Football.
person.greeting(); //Hi I'm Tony Montana
```

## Abstraction

Hiding implementation details and showing only the functionality to the users. In other words, it hides irrelevant details and shows only what's necessary to the outer world.

In our objects, we can hide some of the properties and methods from the outside and this gives us some benefits.

1. It will make the interface of those objects simpler. Using an object with a few properties and methods is far simpler than an object with many properties and methods 
2. Reduce the impact of change - Changing the code inside of our object will not affect the entire application

Here are two real-world examples of Abstraction that gave me a better understanding.

> *" Think of as an object, this dvd player has a complex logic board on the inside and a few buttons on the inside you interact with. You simply press play and you don't care what happens on the inside. All that complexity is hidden from you. This is abstraction in practice. " - mosh*
>
> *"When you are driving a car and you push the break pedal, you don’t think about weight distribution, the brake caliper containing pistons that push the brake pads against the disc, or how power assistance mode augments the pressure you are placing on the pedal. You simply want the car to stop. That’s what you expect to happen. You see? You’ve already been using abstract thinking – it’s natural" - JavaScript Grammer* 

### Abstraction Example

The higher-order-function `map()`used abstraction. `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const nums = [1, 4, 9, 16];

// We want to multiply each number in the array by 2
const result = nums.map(x => x * 2);

console.log(result);
// expected output: Array [2, 8, 18, 32]
```

The only thing we need to know about `map()` is that it creates a new array with the results of calling a function for every array element. 

What is hidden with abstraction are the other functions inside the map() method that iterates over each item in the array and how it returns the array. That is all hidden away within the function and is unnecessary to be put on display  

## Inheritance

This is a person object that we can use as a blueprint to create other person objects. In other programming languages, this is called a class, in JavaScript, we call it a constructor or prototype. Using this constructor we can create as many **instances** as we want. 

**Person**  \
name \
yearOfBirth job
calculateAge() 

**Instances of Person**

| **const Mike** | **const Molly** | **const James** |
| -------------- | --------------- | --------------- |
| Mike           | Molly           | James           |
| 1992           | 1990            | 1982            |
| Teacher        | Chef            | Dancer          |
| calculateAge() | calculateAge()  | calculateAge()  |

Mike Molly and Brad were created from the Person constructor, so they are now person instances and have access to the `calculateAge() `method. Again the constructor acts as a blueprint and is used to create instances that are also objects. 

I will cover constructors in greater detail but for now, I just want to give you an overview of what they are and how they work in inheritance.

**Inheritance** is when one object is based on another object and one object gets access to another object's properties and object.

What if we wanted to have an athlete constructor with different properties and methods 

**Athlete**  \
olymics \
olympicMedals \
allowedOlympics()

An athlete is also a person but with some different properties and methods. When creating an Athlete constructor there is no need to repeat the same properties and methods that we already have in the Person constructor because an athlete also has a name, job, and birth.

**Person** \
name \
yearOfBirth \
job \
calculateAge() 

**Athlete**  \
olymics \
olympicMedals \
allowedOlympics()

What we can do is to use inheritance. We will make the Athlete object inherit the properties and methods from the Person object .

**Athlete** \
olymics \
olympicMedals \
allowedOlympics() \
name
yearOfBirth
job
calculateAge() 

The athlete also has access to the properties from the person object but also it's own Inheritance enables new objects to take on the properties of existing objects.

Inheritance allows Objects to inherit from each other, allowing you to keep your code dry and have access to methods or properties you have already declared.

HTML elements TextBox Select and CheckBox have a few things in common like hidden, innerHTML, `click()` and `focus()`. Instead of redefining all these properties and methods  for each element we can define it once in a generic object, call it HTMLElement and have other objects inherit these properties and methods.

## Polymorphism

#### **Poly** - many   **Mortph** - Form | many forms

Arguably the most powerful aspect of object-oriented programming.

The basic idea of polymorphism is that when a piece of code is written to work with objects that have a certain interface, any kind of object that happens to support this interface can be plugged into the code, and it will just work. We already saw simple examples of this, like the `toString()` method on objects. All objects that have a meaningful `toString ()`method can be given to print and other functions that need to convert values to strings, and the correct string will be produced, no matter how their `toString()`method chooses to build this string.

Polymorphism (objects can share the same interface—how they are accessed and used—while their underlying implementation of the interface may differ),

The primary usage of Polymorphism in Object-Oriented Programming is the ability of objects belonging to different types to respond to methods, fields, or property calls of the same name, each one according to an appropriate type-specific behaviour.

The programmer does not have to know the exact type of the object in advance, and so the exact behavior is determined at run-time. This is what we call late binding or dynamic binding (this makes Polymorphism a very cool feature). Requirements are such that, there must be properties with the same name and the same parameter sets in all the superclasses, subclasses, and interfaces.

A `for/of loop` can loop over several kinds of data structures. This is another case of polymorphism

## Summary

The idea of OOP is to encapsulate related data and functionality. If we want to make another similar object we do not have to redefine the properties/methods we can just inherit them from a similar object 

**Encapsulation** - Reduce complexity and increase reusability \
**Abstraction** - Reduce complexity and isolate the impact of change \
**Inheritance** - One object s based on another object\
**Polymorphism** - 'The ability of multiple object types to implement the same functionality
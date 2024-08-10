// Discuss the concept of the prototype chain in JavaScript.
// Answer: In JavaScript, each object has a prototype, and objects inherit properties and methods from their prototypes. The prototype chain is a mechanism where an object inherits from its prototype, and the prototype itself can have its prototype, forming a chain. Understanding the prototype chain is crucial for prototypal inheritance in JavaScript.

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

console.log(rabbit.jumps); // Outputs: true
console.log(rabbit.eats); // Outputs: true
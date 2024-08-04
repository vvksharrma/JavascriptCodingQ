Types vs Interfaces
Types
Definition: Types in TypeScript are used to define a set of values or shapes for objects. They can represent primitive types, union types, intersection types, tuples, and more.

Usage: They are more flexible and can be used to define complex types, including union and intersection types.

Syntax: Types are defined using the type keyword.

typescript
Edit
Copy code
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type Employee = Person & Address; // Intersection type

let employee: Employee = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Wonderland"
};

type ID = string | number; // Union type
Interfaces
Definition: Interfaces are used to define the shape of objects, including properties and methods. They are specifically designed for object shapes and can be extended or merged.

Usage: They are more suited for defining object-oriented shapes and can be extended or implemented by classes.

Syntax: Interfaces are defined using the interface keyword.

typescript
Edit
Copy code
interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
}

interface Employee extends Person, Address {
  employeeId: number;
}

let employee: Employee = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "Wonderland",
  employeeId: 1
};
Key Differences
Extending and Implementing
Types: Types can use intersections (&) to combine multiple types.
Interfaces: Interfaces can extend other interfaces using the extends keyword, which is more suited for inheritance.
Declaration Merging
Types: Cannot be merged or extended once defined.
Interfaces: Can have multiple declarations with the same name, and TypeScript will automatically merge them. This is useful for extending existing interfaces.
When to Use Each
Use type when you need to define complex types involving unions, intersections, or tuples, or when you need to alias primitive types.
Use interface when you are defining the shape of objects or classes, especially if y
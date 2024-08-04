TypeScript is a superset of JavaScript that adds static typing to the language. This can help catch errors early and improve code readability. Here’s a rundown of the primary data types available in TypeScript:

1. Primitive Types
These are the basic data types that are immutable.

number: Represents both integer and floating-point numbers.

typescript
Copy code
let age: number = 25;
let price: number = 99.99;
string: Represents a sequence of characters.

typescript
Copy code
let name: string = "Alice";
let message: string = `Hello, ${name}!`;
boolean: Represents true or false.

typescript
Copy code
let isActive: boolean = true;
let hasCompleted: boolean = false;
bigint: Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent).

typescript
Copy code
let largeNumber: bigint = 1234567890123456789012345678901234567890n;
symbol: Represents a unique identifier.

typescript
Copy code
let uniqueSymbol: symbol = Symbol('description');
undefined: Represents a variable that has been declared but not assigned a value.

typescript
Copy code
let notAssigned: undefined = undefined;
null: Represents an intentional absence of value.

typescript
Copy code
let noValue: null = null;
2. Special Types
any: Represents any type of value. It essentially turns off type checking for the variable.

typescript
Copy code
let anything: any = 5;
anything = "Now I'm a string";
unknown: Represents any value but requires type checking before performing operations.

typescript
Copy code
let something: unknown = 10;
if (typeof something === 'string') {
  console.log(something.toUpperCase()); // Safe
}
void: Represents the absence of a value, typically used as the return type of functions that don’t return a value.

typescript
Copy code
function logMessage(message: string): void {
  console.log(message);
}
never: Represents values that never occur, such as functions that throw errors or have infinite loops.

typescript
Copy code
function throwError(message: string): never {
  throw new Error(message);
}
3. Object Types
object: Represents any non-primitive type. This is a broad type that encompasses arrays, functions, and objects.
typescript
Copy code
let person: object = { name: "John", age: 30 };
4. Complex Types
Array: Represents a collection of values of a specific type.

typescript
Copy code
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Alice", "Bob"];
Tuple: Represents an array with fixed sizes and types for each element.

typescript
Copy code
let tuple: [string, number] = ["Alice", 25];
Enum: Represents a set of named constants.

typescript
Copy code
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
let color: Color = Color.Green;
Union: Represents a value that can be one of several types.

typescript
Copy code
let id: string | number = "abc123";
id = 12345;
Intersection: Represents a type that combines multiple types.

typescript
Copy code
type Person = { name: string; age: number };
type Employee = { id: number; position: string };
type Worker = Person & Employee;
let worker: Worker = { name: "Alice", age: 30, id: 1, position: "Developer" };
5. Literal Types
Literal: Represents exact values for types.

typescript
Copy code
let direction: "left" | "right" = "left";
Template Literal Types: Represents types constructed from template literal expressions.

typescript
Copy code
type Greeting = `Hello, ${string}!`;
let greeting: Greeting = "Hello, world!";
These types can be combined and extended to create complex type definitions and ensure your TypeScript code is robust and maintainable.
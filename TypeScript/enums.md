# Enums in TypeScript

Enums are a feature in TypeScript that allows you to define a set of named constants. They can be used to represent a collection of related values and are often used to improve code readability and maintainability.

## Basic Enum

```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}

    Summary
    Numeric Enums: Default to starting from 0 or a specified value.
    String Enums: Each member must have a string literal value.
    Heterogeneous Enums: Mix of string and numeric values (less common).
    Const Enums: Inlined at compile time, no runtime representation.
    Reverse Mapping: Available for numeric enums to map values to names.
    Enums provide a structured and readable way to handle sets of related constants in TypeScript.

Accessing Enum Members

let move: Direction = Direction.Up;
console.log(move); // Output: 0
Specifying Numeric Values
You can explicitly set the numeric values of enum members.

enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
Automatic Increment
If you only specify the first value, subsequent members will auto-increment from the last specified value.

typescript
Copy code
enum Direction {
    Up = 1,
    Down, // 2
    Left, // 3
    Right // 4
}
String Enums
Enums can also use string values. Each member must be initialized with a string literal.

typescript
Copy code
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
Heterogeneous Enums
You can mix numeric and string values, but this is generally discouraged due to potential confusion.

typescript
Copy code
enum Response {
    No = 0,
    Yes = "YES"
}
Computed and Constant Members
Enums can have computed members, but they need to be initialized with constants or other enum members.

typescript
Copy code
enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write
}
Reverse Mapping
TypeScript provides reverse mapping for numeric enums. You can access the name of an enum member from its value.

typescript
Copy code
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction[1]); // Output: "Up"
Const Enums
const enums are a special kind of enum that are inlined during compilation to reduce overhead. They do not have a runtime representation.

typescript
Copy code
const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
Usage
Enums are useful when you need to represent a fixed set of related values. They provide a way to use meaningful names instead of magic numbers or strings, which improves code clarity.

typescript
Copy code
function movePlayer(direction: Direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving Up");
            break;
        case Direction.Down:
            console.log("Moving Down");
            break;
        // Handle other cases...
    }
}
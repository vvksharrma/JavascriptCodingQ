Interfaces and Types in TypeScript
### Interfaces

Interfaces in TypeScript are used to define the structure of an object. They define the shape of an object, including the types of its properties, methods, and their return types.
#### Example
```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'John',
  age: 30
};
In the above example, we define an interface Person with two properties name and age. We then create an object person that conforms to the Person interface.

Types
Types in TypeScript are used to define the type of a variable, function, or property. They can be used to define the type of a primitive value, an object, an array, or a function.

Example
type StringOrNumber = string | number;  //union

let value: StringOrNumber = 'hello';
value = 42;

In the above example, we define a type StringOrNumber that can be either a string or a number. We then create a variable value with the type StringOrNumber and assign it a string value. Later, we assign it a number value.

Type Aliases
Type aliases are used to give a new name to an existing type. They are useful when we want to create a shortcut for a complex type.

Example
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John',
  age: 30
};

Intersection of Types
type Vehicle={
    manufacturer: string;
    model: string;
}
type car=vehicle & {
    isElectric=boolean
}
In the above example, we define a type alias Person for an object type with two properties name and age. We then create an object person with the type Person.

Interfaces vs Types
some key differences:
-Interfaces are used to define the structure of an object, while types are used to define the type of a variable, function, or property.
-Interfaces can be extended using the extends keyword, while types cannot be extended.
-Interfaces can be used to define the type of an object, while types can be used to define the type of a primitive value, an array, or a function.
Example
interface Animal {
  name: string;
}
interface Animal{
    gender:string
}
interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: 'Fido',
  breed: 'Golden Retriever'
};
In the above example, we define an interface Animal with a property name. We then define an interface Dog that extends Animal and adds a property breed. We then create an object dog with the type Dog.
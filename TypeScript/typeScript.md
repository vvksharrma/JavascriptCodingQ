### what
Superset of JS
statically  Typed
.ts > .js > v8Engine

### why TS
large scale apps -> ex: next person will know what type of var to expect
Error Detection -> by declaring types avoiding error
Code Quality
faster debugging
Future proofing

### 1.Setup
    npm install typescript
    npm i ts-node
    tsc --init  //for tsconfig (compiler options)
    tsc index.ts

2.Data Types
3.Types and Interface
4.Union and Intersection
### 5.Aliases
    way to give a new name to an existing type. 
    ```interface MyObject {
    name: string;
    age: number;
    }

    type MyObjectType = MyObject;
    ```
6.Classes and Generics
7.Functions
8.Literal Types
9.Enums
### 10.Assertion Types
    ```let somevalue:any="this is a string"
    let strlength:number=somevalue.length  //wrong Error in TS
    let strlen:num=(<String>somevalue).length;
    let strlen2: number = (somevalue as string).length; //as keyword ;
    let strlen3: number = somevalue.length as number; //as keyword ;
    ```
11.Modules and Namespaces
12.Decorator
### 13.Type Guards
    A type guard is a function that returns a type predicate, which is a value that indicates whether a type is assignable to another type. The type predicate is used to narrow the type of a value within a specific scope.
    ```let value: string | number = 'hello';

    if (isString(value)) {
    // Within this scope, value is known to be a string
    console.log(value.toUpperCase()); // Okay
    } else {
    // Within this scope, value is known to be a number
    console.log(value.toFixed(2)); // Okay
    }
    ```
### 14.index signature
    way to define a type that represents an object with a dynamic set of properties. to specify the type of the property keys and the type of the property values.
    examle:
    ```
    interface StringArrray{
        [index:number]:string
    }
    let myarray:StringArray=["vivek","sharmaa"];

### 15.keyof operator
    gives us the key of interface which can be used to extract type of key
    ```
    interface Person {
        name: string;
        age: number;
        occupation: string;
    }

    type PersonKey = keyof Person; 
    console.log(PersonKey) // type PersonKey = "name" | "age" | "occupation"
    let m:PersonKey="age";
    console.log(m) //gives us number
```
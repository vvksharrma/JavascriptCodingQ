## NameSpace
 a namespace is a way to organize related variables, functions, and classes into a single unit.
 Namespaces are used to avoid naming conflicts and to provide a way to group related functionality together.

Declaring and acessing
```
namespace MyNamespace {
  // variables, functions, and classes go here
}

//usage
import * as MyNamespace from './MyNamespace';
MyNamespace.myFunction();
```
Merging
```
export namespace MyNamespace {
  class MyClass { }
}

namespace MyNamespace {
  interface MyInterface { }
}
```
Namespaces can interact with modules in TypeScript. For example, you can import a module into a namespace, or export a namespace from a module.
```namespace MyMath {
  export function add(a: number, b: number) {
    return a + b;
  }

  export function subtract(a: number, b: number) {
    return a - b;
  }
}

console.log(MyMath.add(2, 3)); // outputs 5
console.log(MyMath.subtract(5, 2)); // outputs 3
```

```namespace MyNamespace {
  export function add(a: number, b: number) {
    return a + b;
  }

  export class MyClass {
    constructor(private name: string) { }
  }
}

MyNamespace.add(2, 3); // returns 5
const myObject = new MyNamespace.MyClass('John');
```
Nested namespace
```namespace MyNamespace {
  export namespace SubNamespace {
    export function subtract(a: number, b: number) {
      return a - b;
    }
  }
}
```

## Module
Declaring
using the export keyword followed by the module contents.
```
export function add(a: number, b: number) {
  return a + b;
}

export class MyClass {
  constructor(private name: string) { }
}
```
Importing a module
```
import { add, MyClass } from './MyModule';
```
Exporting a module
You can export a module using the export keyword. For example:
```
export * from './MyModule';
```

### When to use namespaces and when to use modules

#### Use namespaces when:
You need to group related functionality under a single name.
You need to avoid naming conflicts.
You need to organize code in a logical manner.
#### Use modules when:
You need to organize code into reusable pieces.
You need to import and export specific members.
You need to support type checking and validation.


## Key differences
Here are the key differences between modules and namespaces in TypeScript:

Purpose: Modules are used to organize code into reusable pieces, while namespaces are used to group related functionality under a single name.

Scope: Modules have a global scope, while namespaces have a local scope.

Exporting: Modules can export specific members, while namespaces can export all members or specific members.
Import/export: Modules support import and export statements, while namespaces do not.

Type checking: Modules are type-checked independently, while namespaces are not.
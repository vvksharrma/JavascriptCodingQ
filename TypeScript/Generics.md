## Generics
Generics are a feature in TypeScript that allows you to create reusable functions, classes, and interfaces that can work with multiple types, rather than a single type. This enables you to write more flexible and reusable code.

#### Genric Function
```
function identity<T>(arg: T): T {
  return arg;
}

let num =identity<number>(42);
let string =identity<string>("forty two");

function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers = [1, 2, 3];
const firstNumber = first(numbers); // firstNumber: number | undefined

const strings = ['a', 'b', 'c'];
const firstString = first(strings); // firstString: string | undefined

```

#### Generic interface
```
interface Container<T,U> {
    value: T;
    extra: U;
}
let example:Container<number,string>={
    value:23,
    extra:"wecwc"
}
let example2:Container<number,boolean>={
    value:23,
    extra:false,
}
```

#### Generic Classes
```
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberContainer = new Container<number>(42);
const numberValue = numberContainer.getValue(); // numberValue: number

const stringContainer = new Container<string>('hello');
const stringValue = stringContainer.getValue(); // stringValue: string
```

### Example stack using Genrics
```
class Stack<T> {
  private elements: T[] = [];

  push(element: T): void {
    this.elements.push(element);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }
}

const stringStack = new Stack<string>();
stringStack.push('hello');
stringStack.push('world');
console.log(stringStack.pop()); // Output: "world"
console.log(stringStack.peek()); // Output: "hello"

const numberStack = new Stack<number>();
numberStack.push(42);
numberStack.push(13);
console.log(numberStack.pop()); // Output: 13
console.log(numberStack.peek()); // Output: 42

const objectStack = new Stack<{ name: string, age: number }>();
objectStack.push({ name: 'John', age: 30 });
objectStack.push({ name: 'Jane', age: 25 });
console.log(objectStack.pop()); // Output: { name: "Jane", age: 25 }
console.log(objectStack.peek()); // Output: { name: "John", age: 30 }
```
# Decorators
allows you to wrap another function or class with additional functionality without modifying the original code.
@decoratorName
class MyClass {
  // ...
}

### Types of decorators

There are several types of decorators in TypeScript:
#### Class decorators: Applied to classes to modify or extend their behavior.
```
function logCreation(target: any) {
  console.log(`Instance of ${target.name} created!`);
}

@logCreation
class MyClass {
  constructor() {}
}

const myInstance = new MyClass(); // Output: "Instance of MyClass created!"
```

#### Method decorators: Applied to methods to modify or extend their behavior.
```
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args: ${args.join(', ')}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class MyClass {
  @logMethod
  myMethod(a: number, b: number) {
    return a + b;
  }
}

const myInstance = new MyClass();
myInstance.myMethod(2, 3); // Output: "Calling myMethod with args: 2, 3"
```

#### Property decorators: Applied to properties to modify or extend their behavior.
```function validateEmail(target: any, propertyKey: string) {
  let value: string;
  const getter = () => value;
  const setter = (newVal: string) => {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newVal)) {
      throw new Error(`Invalid email address: ${newVal}`);
    }
    value = newVal;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
  });
}

class MyClass {
  @validateEmail
  email: string;
}

const myInstance = new MyClass();
myInstance.email = 'invalid-email'; // Error: "Invalid email address: invalid-email"
```

#### Function decorators: Applied to functions to modify or extend their behavior.


### Real-world use cases

#### Authentication and authorization: 
Use decorators to check if a user is authenticated or authorized to access a certain method or property.
#### Logging and debugging: 
Use decorators to log method calls, errors, or other important events in your application.
#### Validation: 
Use decorators to validate user input, such as email addresses or passwords.
#### Caching: 
Use decorators to cache the results of expensive method calls.
#### AOP (Aspect-Oriented Programming): 
Use decorators to implement aspects, such as logging or security checks, in a modular and reusable way.
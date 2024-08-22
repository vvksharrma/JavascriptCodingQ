
```
class Person{
    name:string;
    age?:number;

    constructor(name:string,age?:number){
        this.name = name;
        this.age=age;
    }
}

const person1=new Person();
const person2=new Person('John');
const person3=new Person('john',22)

#### Access Modifiers
Access modifiers determine the visibility and accessibility of a class's properties and methods. JavaScript supports three types of access modifiers:

#### 1. Public
Public properties and methods are accessible from anywhere, both within and outside the class.
class Person {
  constructor(name, age) {
    this.name = name; // public property
    this.age = age; // public property
  }

  sayHello() { // public method
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

#### 2. Private
Private properties and methods are only accessible within the class itself. and not in subclass
class Person {
  #name; // private property
  #age; // private property

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
  }
}

#### 3. Protected
Protected properties and methods are accessible within the class and its subclasses.
class Person {
  #name; // private property
  #age; // private property

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
  }

  protectedMethod() { // protected method
    console.log('This is a protected method.');
  }
}

class Employee extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }

  sayHello() {
    super.sayHello();
    console.log(`I work in the ${this.department} department.`);
  }

  callProtectedMethod() {
    this.protectedMethod(); // accessible because Employee is a subclass of Person
  }
}

## Getter and setter
class Person {
  #name; // private property

  constructor(name) {
    this.#name = name;
  }

  get name() { // getter
    return this.#name;
  }

  set name(value) { // setter
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this.#name = value;
  }
}
Getter and setter are inherited by subclasses. 
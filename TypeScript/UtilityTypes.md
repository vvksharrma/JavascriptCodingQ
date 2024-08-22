##  utility types 
are a set of built-in types that help you perform common type transformations and manipulations. They are often used to create reusable and composable type definitions. Here are some of the most commonly used utility types in TypeScript:

#### Partial<T>: Creates a type that represents a partial version of T, where all properties are optional.
Example: Partial<{ a: string, b: number }> => { a?: string, b?: number }
convert all properties to optional
```
interface Animal{
    name: string;
    sound:string;
}
type partialAnimal:Partial<Animal>;
const dog:partialaAnimal={
    name: 'dog',
}
```

#### Required<T>: Creates a type that represents a required version of T, where all properties are required.
Example: Required<{ a?: string, b?: number }> => { a: string, b: number }

#### Readonly<T>: Creates a type that represents a read-only version of T, where all properties are readonly.
Example: Readonly<{ a: string, b: number }> => { readonly a: string, readonly b: number }

#### Record<T,U> : Creates a type that represents an object with the specified keys and values.
type Records=Record<number,string>;
const record:Records={
    3:"c"
}
#### Pick<T, K>: Creates a type that represents a subset of T, where only the properties specified in K are included.
Example: Pick<{ a: string, b: number, c: boolean }, 'a' | 'b'> => { a: string, b: number }
```
//picks only specific property
type nameOnly=Pick<Animal,"name">;
const cat:nameOnly={
    name:'cat"
}
```

#### Omit<T, K>: Creates a type that represents a subset of T, where all properties except those specified in K are included.
Example: Omit<{ a: string, b: number, c: boolean }, 'a'> => { b: number, c: boolean }
```
//picks the remainig property
type removesound=Omit<Animal,"sound">;
const rabbit:nameOnly={
    name:"bunny"
}
#### Exclude<T, U>: Creates a type that represents the exclusion of U from T.
Example: Exclude<string | number, string> => number

#### Extract<T, U>: Creates a type that represents the extraction of U from T.
Example: Extract<string | number, string> => string

#### NonNullable<T>: Creates a type that represents the non-nullable version of T.
Example: NonNullable<string | null | undefined> => string

#### ReturnType<T>: Creates a type that represents the return type of a function T.
Example: ReturnType<() => string> => string

#### InstanceType<T>: Creates a type that represents the instance type of a constructor function T.
Example: InstanceType<typeof String> => string

#### ThisParameterType<T>: Creates a type that represents the this parameter type of a function T.
Example: ThisParameterType<(this: string) => void> => string

#### OmitThisParameter<T>: Creates a type that represents the function type T without the this parameter.
Example: OmitThisParameter<(this: string) => void> => () => void
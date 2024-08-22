## Literal types

allow you to specify exact values for variables or properties. Unlike regular types that can represent a range of values, literal types define types with specific literal values. 

The following are the literal types in TypeScript:
- `number`: The number type represents both integers and floating point numbers.
```
let answer: 42 | 21;

```

- `string`: The string type represents a sequence of characters.
```
let Status: 'pending' | 'approved' | 'rejected';
function statusOfItem(status:Status){
    return status;
}
```

- `boolean`: The boolean type represents a logical value, either `true` or `false`.
```
let isAdmin: true | false;
```

example
```
type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY';

let currencyCode: CurrencyCode = 'USD'; // okay
currencyCode = 'XYZ'; // error: Type '"XYZ"' is not assignable to type 'CurrencyCode'.
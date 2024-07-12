//sorting objects
// Sample object to be sorted
const obj = {
    a: 5,
    b: 3,
    c: 8,
    d: 1
};

// Convert object to array of key-value pairs
const entries = Object.entries(obj);

// Sort the array based on the values (second element of each pair)
entries.sort(([, valueA], [, valueB]) => valueA - valueB);

// Convert sorted array back to object
const sortedObj = Object.fromEntries(entries);

console.log(sortedObj);





//sorting nested object
const nestedObj = {
    obj1: {
        a: 5,
        b: 3,
        c: 8,
        d: 1
    },
    obj2: {
        x: 10,
        y: 6,
        z: 7
    }
};

function sortNestedObject(obj) {
    const sortedObj = {};
    
    // Sort each key in the object
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            // Recursively sort nested objects
            sortedObj[key] = sortNestedObject(obj[key]);
        } else {
            // Convert object to array of entries and sort by values
            const entries = Object.entries(obj[key]);
            entries.sort(([, valueA], [, valueB]) => valueA - valueB);
            sortedObj[key] = Object.fromEntries(entries);
        }
    });
    
    return sortedObj;
}

// Usage example
const sortedNestedObj = sortNestedObject(nestedObj);
console.log(sortedNestedObj);





////////////////////////////////////////////////////////////
//sorting array of objects
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 },
    { name: 'David', age: 35 }
];

people.sort((a,b)=>{
    if(a.age<b.age){
        return -1
    }
    if(a.age>b.age){
        return 1
    }
    else return 0
})

console.log(people)

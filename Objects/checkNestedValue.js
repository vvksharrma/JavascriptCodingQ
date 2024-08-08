

obj = {
    a: {
        b: 1,
        c: 2,
    },
    d: 3,
    e: {
      f: 4
    }
  }
  

  function getValue(path) {
    const keys = path.split('.'); // Split the path into individual keys
  
    // Start with the top-level object
    let value = obj;
  
    // Traverse each key in the path
    for (let key of keys) {
      // Check if the current level has the key
      if (value.hasOwnProperty(key)) {
        value = value[key]; // Update the value to the nested object
      } else {
        return undefined; // Return undefined if any key is missing
      }
    }
  
    return value;
  }
  
  
  console.log(getValue('a.b')) // 1
  console.log(getValue('a.b.d')) //undefined
  console.log(getValue('d')) //3
  console.log(getValue('a.b.c.f')) //undefined
  
  // using reduce method
  function readKey(obj, path) {
    const pathArr=path.split('.');
    
    return pathArr.reduce((current,key)=>{
        return (current !== undefined && current !== null) ? current[key] : undefined;
    },obj)
}

const obj = {
    a: 1,
    b: {
        c: {
            d: 100
        }
    },
    e: null
};
console.log(readKey(obj, 'a')); // 1
console.log(readKey(obj, 'b.c.d')); // 100
console.log(readKey(obj, 'b.e')); // undefined
console.log(readKey(obj, 'e')); // null
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
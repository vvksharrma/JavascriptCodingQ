const flattenArray = (nestedArray) => { 

    return nestedArray.flat(Infinity); 
  
  }; 
  console.log(flattenArray([1,[3,3,[5,1]]]))
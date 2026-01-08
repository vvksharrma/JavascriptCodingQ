const flattenArray = (nestedArray) => { 

    return nestedArray.flat(Infinity); 
  
  }; 
  console.log(flattenArray([1,[3,3,[5,1]]]))


//coding implementation 

const flatten(arr){
 return are.reduce((acc,val){


if(Array.isArray(val){
return acc.concat(flatten(val))
}
return acc.concat(val)
},[])
}
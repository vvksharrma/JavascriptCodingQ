let arr=[1,4,2,6,3,{a:5,b:9,c:{d:8}}];
const original = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    }
  };
//shallow copy methods
let arr4=[...arr];
let arr2=arr.slice(0);
let arr3=arr.concat();
let arr6=Array.from(arr);

//shallow copy object
let newObj=Object.assign({},original)
//deep copy methods
let arr5=JSON.parse(JSON.stringify(arr));    //deep copy all levels

arr[5].a=10;

//Using recursion
function deepCopy(obj){
    let copy=Array.isArray(obj)?[]:{};
    for(let key in obj){
        if(typeof obj[key]==='object'){
            copy[key]=deepCopy(obj[key]);
        }else{
            copy[key]=obj[key];
        }
}
return copy;
}

  const copied = deepCopy(original);
copied.address.city = 'Boston';
  console.log(original.address.city);
console.log(copied)
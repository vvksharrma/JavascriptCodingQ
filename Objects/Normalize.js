const obj = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 40 },
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
];

//one way
//output
// [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Jane', age: 25 },
//     { id: 3, name: 'Bob', age: 40 }
//   ]
function normalize(obj) {
  let result = {};
  obj.forEach((item) => {
    if (!result[item.id]) {
      result[item.id] = item;
    }
  });
  return result;//will return only new normalized array
  //   return Object.values(result); //will return with keys
}
console.log(normalize(obj));

//second way
//output

function normalizeCollect(obj) {
    let result = {};
    obj.forEach((item) => {
      if (!result[item.id]) {
        result[item.id] = [];
      }
      result[item.id]=[...result[item.id],{item}]
    });
  }
  console.log(normalizeCollect(obj));
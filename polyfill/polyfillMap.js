//Wrting polyfill of map, polyfills are function written which are not supported by older versions of browsers.
const arr = [1, 2, 3, 4, 5];
console.log("arr->",arr)
//Array Map
const srqarr = arr.map((item) => item * item);
console.log("inbuild ->",srqarr);

function sqr(a){
    return a*a
}
// polyfill of MAP
const polyfillOfMap = (arr, cbfn) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cbfn(arr[i]));
  }
  return newArr
};
const sqrpoly=polyfillOfMap(arr,sqr)
console.log("polyfill->",sqrpoly)

// using prototype
//If you want a method to be available to all object instances, you have to add it to the prototype property:
Array.prototype.myMap=function(cb){
  const arr=this;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr
}
console.log("prototype map->",arr.myMap(sqr))



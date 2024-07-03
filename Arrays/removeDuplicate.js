//using set
const uniqueArray = array => [...new Set(array)];

//Remove duplicate item from array 
const arr = [1,2,3,4,1,2];
const b=[];
for(let i=0;i<arr.length;i++){
if(b.indexOf(arr[i]) == -1){
b.push(arr[i])
}
}
console.log("removed array value",b)


//second method using filter
const arr1 = [1,2,3,4,1,2];
const barr=[];
arr.filter((dup)=>{
if(b.indexOf(arr[dup]) == -1){
b.push(arr[dup])
}
})
console.log("removed array value",b)
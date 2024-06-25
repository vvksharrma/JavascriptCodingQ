// Given array is 
// 1 2 3 4 5 
// Rotated array is
// 5 1 2 3 4 

function rotate(arr){
    let n=arr.length;
    let last_el=arr[n-1];
    for(let i=n-1;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=last_el;
    return arr;
}
let arr=[1,2,3,4,5];
console.log(rotate(arr));
console.log(rotate(arr));
console.log(rotate(arr))
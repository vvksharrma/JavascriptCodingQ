// Given array is 
// 1 2 3 4 5 
// Rotated array is
// 5 1 2 3 4 

// using slice method 
function rotateArray(arr, n) {
  // Normalize n to be within the bounds of the array length
  n = n % arr.length;
  if (n < 0) {
    // Convert negative rotations to positive
    n = arr.length + n;
  }

  // Slice the array and concatenate
  const rotatedPart = arr.slice(-n);
  const remainingPart = arr.slice(0, -n);
  return rotatedPart.concat(remainingPart);
}
// Example usage
const array = [1, 2, 3, 4, 5];
const n = 2;
const rotatedArray = rotateArray(array, n);
console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]

//----------------------------//

// with no inbuilt methods
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

// n times rotate 
function rotateKTimes(arr, k) {
    let n = arr.length;
    k = k % n; // To handle cases where k > n

    for (let i = 0; i < k; i++) {
        let last_el = arr[n - 1];
        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = last_el;
    }
    return arr;
}

// Example usage
let array = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotateKTimes(array, k)); // Output: [4, 5, 1, 2, 3]
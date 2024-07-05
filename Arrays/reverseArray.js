
let array = [1, 2, 3, 4, 5];

//arr.push method
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

//No inbuilt fn
let length = array.length;
for (let i = 0; i < Math.floor(length / 2); i++) {
    let temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
}
console.log(array); // Output: [5, 4, 3, 2, 1]

//uing inbuilt methods
//first method revere same array
array.reverse();  

//second method which return new reversed array
let reversedArray = [...array].reverse();
function findMaxElement(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

// Example usage:
const largeArray = [1, 5, 3, 9, 2, 8, 7];
console.log(findMaxElement(largeArray)); // Output: 9

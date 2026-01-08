//To determine if one string is a cyclic rotation of another string, 
Check the lengths: 
Ensure both strings have the same length. If they don't, one cannot be a rotation of the other.

Concatenate: Create a new string by concatenating the first string with itself (e.g., if the first string is "ABCD", the new string is "ABCDABCD").

Search: Check if the second string is a substring of the concatenated string. If it is, then the second string is a cyclic rotation of the first string. 



//using js inbuild methods 
function isCyclicRotation(str1, str2) {
    // 1. Check lengths and ensure they are not empty
    if (str1.length !== str2.length || str1.length === 0) {
        return false;
    }

    // 2. Concatenate str1 with itself
    const concatenatedStr = str1 + str1;

    // 3. Check if str2 is a substring of the concatenated string
    // The includes() method is a simple way to do this in JS
    return concatenatedStr.includes(str2);
}


//general approach 
//O(n^2) time O(1) space
//The idea is to generate all possible rotations of the first string and check if any of these rotations match

function areRotations(s1, s2) {
    let n = s1.length;

    // generate and check all possible rotations of s1
    for (let i = 0; i < n; i++) {
        
        // if current rotation is equal to s2 return true
        if (s1 === s2) {
            return true;
        }

        // Right rotate s1
        let last = s1[s1.length - 1];
        s1 = last + s1.slice(0, s1.length - 1);
    }
    return false;
}

// Driver Code
let s1 = "aab";
let s2 = "aba";

console.log(areRotations(s1, s2) ? "true" : "false");


const str = "vivek";

function countCharacters(str) {
  const charCount = {};
  
  // Loop through each character in the string
  for (let char of str) {
    // Convert character to lowercase (optional, depends on case sensitivity requirement)
    char = char.toLowerCase();
    
    // Check if character already exists in charCount, then increment count, else initialize with count 1
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  
  return charCount;
}

const result = countCharacters(str);
console.log(result); // Output: { v: 2, i: 1, e: 1, k: 1 }


//short answer
let oo={}
for(let i=0;i<str.length;i++){
  oo[str[i]]?oo[str[i]]++:oo[str[i]]=1
  // oo[str[i]]=(oo[str[i]]||0)+1;

}
console.log(oo)
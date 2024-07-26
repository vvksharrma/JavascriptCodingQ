const str1="abc";
const str2="def";
//output str=adbecf

const maxLen=str1.length>str2.length?str1.length:str2.length;
let str=''

for(let i=0;i<maxLen;i++){
    let tempstr=str1[i]+str2[i];
    str+=tempstr;
}
console.log(str);


//if string lenght are unequal 

let maxLength = Math.max(str1.length, str2.length);
let newstr=""
for (let i = 0; i < maxLength; i++) {
  if (i < str1.length) {
    newstr += str1[i];
  }
  if (i < str2.length) {
    newstr += str2[i];
  }
}

console.log(newstr);

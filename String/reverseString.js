
function reverseStr(str){
    let newStr="";
    for(let i=str.length-1;i>=0;i--){
        newStr=newStr+str[i];
    }
    return newStr;
};
const rvrs=reverseStr('vivek');
console.log(rvrs);
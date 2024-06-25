// input =>a= "Anagram" ;b="nagrama" --- output = True

let a= "Anagram" ;
let b="nagrama";

function TestAnagarm(a,b){
    if(a.length !== b.length){
        return false;
    }
    else{
        let aArray = a.toLowerCase().split('').sort().join('');
        let bArray = b.toLowerCase().split('').sort().join('');
        return aArray === bArray;

    }
}

console.log(TestAnagarm(a,b)); // output = True
 //input: welcome_to_sirion
 // output: welcomeToSirion

 let string="welcome_to_sirion";

 function Camel(str){
   let str1=str.split('_');
   console.log(str1);
   let newStr=str1.map((word,idx)=>{
     if(idx==0){
       return word;
     }
     else{
       let firstChar=word.charAt(0).toUpperCase();
       let leftChars=word.slice(1);
       return firstChar+leftChars;
     }
    
   })
   return newStr.join('')
 }
 console.log(Camel(string));
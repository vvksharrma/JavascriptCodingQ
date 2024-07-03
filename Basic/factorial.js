// A factorial number is the product of all positive integers, which are equal to or less than the given number.  
function factorial(num) { 

    if (num <= 1) return 1; 
  
    return num * factorial(num-1); 
  
  } 
//throttle limits the execution of the function
//basic approach
const throttle=(fn,limit)=>{
    let flag=true
    return function(){
        if(flag=true){
            fn();
            flag=false
            setTimeout(() => {
                flag=true
            }, limit);
        }
    }
}

//with args
const throttle=(fn,limit)=>{
    let flag=true
    return function(){
        let context=this;
        let args=arguments;
    
        if(flag=true){
            fn.apply(context,args);
            flag=false
            setTimeout(() => {
                flag=true
            }, limit);
        }
    }
}




//chatGpt
function throttle(func, limit) {
    let lastExecutionTime = 0;
  
    return function (...args) {
      const context = this;
      const now = Date.now();
  
      if (now - lastExecutionTime >= limit) {
        func.apply(context, args);
        lastExecutionTime = now;
      }
    };
  }
  
  // Example usage:
  function handleClick() {
    console.log("Button clicked");
  }
  
  const throttledClickHandler = throttle(handleClick, 1000); // Throttle the click handler with a limit of 1000ms
  
  // Attach throttled click handler to button
  document.getElementById('myButton').addEventListener('click', throttledClickHandler);
  
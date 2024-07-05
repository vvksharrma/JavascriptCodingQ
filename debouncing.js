// Debounce delays invoking a function until after a specified time has elapsed since the last invocation. It's useful for scenarios like search input fields, where you want to wait for the user to finish typing before making an API call.
//Debouncing an input value

const debounce=(fn,delay)=>{
    let timedput=setTimeout(()=>{
        fn()
    },delay)

    return ()=>{
        clearTimeout(timedput)
    }
}

function fn(query) {
    console.log("Searching for:", query);
    // Perform search operation here (e.g., make an API request)
  }

//onclick
const search=debounce(fn,500);





//chat gpt
function debounce(func, delay) {
    let timer;
    
    return function() {
      const context = this;
      const args = arguments;
      
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }
  
  function handleInput() {
    console.log("Handle input function called");
  }
  
  const debouncedHandleInput = debounce(handleInput, 300);
  
  document.addEventListener("input", debouncedHandleInput);
  






//chatgpt ans
function debounce(func, delay) {
    let timeoutId;
    
    return function() {
      const context = this;
      const args = arguments;
      
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }
  
  // Example usage:
  function search(query) {
    console.log("Searching for:", query);
    // Perform search operation here (e.g., make an API request)
  }
  
  const debouncedSearch = debounce(search, 300); // Debounce the search function with a delay of 300ms
  
  // Simulating user input
  debouncedSearch("apple");
  debouncedSearch("banana");
  debouncedSearch("orange");
  
  // Only the last invocation will trigger the search function after 300ms
  
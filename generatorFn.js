// A generator function is defined using the function* syntax and can be paused and resumed at any point. It uses the yield keyword to produce a sequence of values over time, rather than computing them all at once.
//Generators can be particularly useful in real-world scenarios where you need to handle large datasets, asynchronous operations, or streams of data.   
function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  // Expected output: 10
  
  console.log(gen.next().value);
  // Expected output: 20
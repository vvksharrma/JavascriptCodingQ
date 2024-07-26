// What are Promises in JavaScript?

// In JavaScript, a Promise is a result object that is used to handle asynchronous operations. It represents a value that may not be available yet, but will be resolved at some point in the future. A Promise can be in one of three states:

// Pending: Initial state, where the operation has not started yet.
// Fulfilled: The operation has completed successfully, and the Promise has a value.
// Rejected: The operation has failed, and the Promise has an error.
// Why do we need Promises?

// Before Promises, JavaScript used callbacks to handle asynchronous operations. However, callbacks can lead to callback hell, making the code hard to read and maintain. Promises provide a more elegant way to handle asynchronous operations, making the code more readable and easier to manage.

// Easier to read and write: Promises make asynchronous code more readable and easier to maintain.
// Improved error handling: Promises provide a way to handle errors in a centralized manner.
// Chaining operations: Promises allow us to chain multiple operations together, making it easier to perform complex asynchronous tasks.

// Create a Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 2000);
  });
  
  
// Use the Promise
promise.then((message) => {
    console.log(message); // Output: Hello, World!
  });

  // Use with async/await
  async function main() {
    try {
      const message = await promise;
      console.log(message); // Output: Hello, World!
    } catch (error) {
      console.error(error);
    }
  }
  
  main();

//promise.All
// Create multiple Promises
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved!');
    }, 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved!');
    }, 3000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved!');
    }, 4000);
  });
  
  // Use Promise.all()
  Promise.all([promise1, promise2, promise3]).then((messages) => {
    console.log(messages); // Output: ["Promise 1 resolved!", "Promise 2 resolved!", "Promise 3 resolved!"]
  });


//

Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/users')
]).then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(responses.map(function (response) {
        return response.json();
    }));
}).then(function (data) {
    // Log the data to the console
    // You would do something with both sets of data here
    console.log(data);
}).catch(function (error) {
    // if there's an error, log it
    console.log(error);
});

//from array of params
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array of ids
const responses = await Promise.all(
    ids.map(async id => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        ); // Send request for each id
    })
);


// One thing to note is that Promise.all() will reject entirely even if one of the API calls fails. To avoid this, you can use the Promise.allSettled() method, which resolves even when all promises are rejected. It includes the status(resolved or rejected) of promises in the result.

const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
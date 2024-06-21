
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
},[])

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
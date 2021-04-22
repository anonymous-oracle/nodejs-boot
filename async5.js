// FETCH API: native api to make requests

const url = 'https://jsonplaceholder.typicode.com/todos'

// fetch(url).then((data) => { // fetch returns an in built promise object
//     console.log('Resolved', data);
//     return data.json(); // returns a promise
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('Rejected', err);
// }); 


// ASYNC AND AWAIT
// async functions always return Promises; async function does not stop the code but ensures that a promise is returned later for further execution
// async functions are non-blocking
const getTodos = async () => {
    // this helps in avoiding the then() function chaining; the data passed to the resolve function in the chaining method
    // will be stored in the variable; await ensures that the value of the response is resolved and then assigned
    const response = await fetch(url);
    console.log("Response", response); // should see the response object

    const data = await response.json(); // this resolves the promise returned by the fetch and makes sure that the json object is resolved and assigned to the variable
    console.log(data);
    return data; // even this returns a promise; so it should be resolved and assigned to a variable
};

// to get the 'data' from the function we have to use then() just once to resolve it
getTodos().then(data => {
    console.log('resolved', data);
}).catch((err) => {
    console.log('rejected', err);
});

// const test = getTodos();
// console.log(test);
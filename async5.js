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
const getTodos = async () => {
    // this helps in avoiding the then() function chaining; the data passed to the resolve function in the chaining method
    // will be stored in the variable; await ensures that the value of the response is resolved and then assigned
    const response = await fetch(url);
    console.log(response); // should see the response object
    
};

const test = getTodos();
console.log(test);
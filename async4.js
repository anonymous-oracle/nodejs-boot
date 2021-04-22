// FETCH API: native api to make requests

const url = 'https://jsonplaceholder.typicode.com/todos'

fetch(url).then((data) => { // fetch returns an in built promise object
    console.log('Resolved', data);
    return data.json(); // returns a promise
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('Rejected', err);
});
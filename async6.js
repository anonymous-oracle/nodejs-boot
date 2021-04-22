// FETCH API: native api to make requests

const url = 'https://jsonplaceholder.typicode.com/todos'


const getTodos = async () => {
    const response = await fetch(url);
    console.log("Response", response);
    // checking to see if the response status code is correct
    // if it is incorrect, will throw an error which is caught by the .catch() method

    if (response.status !== 200) {
        throw new Error('not the status code we want!');
    }

    const data = await response.json();
    console.log(data);
    return data;
};

getTodos().then(data => {
    console.log('resolved', data);
}).catch((err) => {
    console.log('rejected', err);
});

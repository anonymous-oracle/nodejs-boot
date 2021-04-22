// SCRIPT NEEDS AN HTML FILE
const getTodos = (resource, callback) => {
    // old style request without JSON

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });
    request.open('GET', resource);

    request.send();
};

// 'https://jsonplaceholder.typicode.com/todos'



// document.addEventListener('click', () => {
//     console.log(1);
//     console.log(2);
//     getTodos('todos/todos1.json', (err, data) => {
//         console.log("callback fired");
//         if (err) {
//             console.log(err);
//         }
//         else if (data) {
//             console.log(data);
//         }
//     });
//     console.log(3);
//     console.log(4);
// });

// // THERE IS A LOT OF NESTING IN THE CODE BELOW; WILL FIX IT WITH PROMISES
// document.addEventListener('click', () => {
//     getTodos('https://jsonplaceholder.typicode.com/todos', (err, data) => {
//         console.log(data);
//         console.log("level 1");
//         getTodos('https://jsonplaceholder.typicode.com/todos', (err, data) => {
//             console.log(data);
//             console.log("level 2");
//             getTodos('https://jsonplaceholder.typicode.com/todos', (err, data) => {
//                 console.log(data);
//                 console.log("level 3");
//             });
//         });
//     });
// });

// document.addEventListener('click', () => {
//     getTodos('https://jsonplaceholder.typicode.com/todos', (err, data) => {
//         console.log(data);
//         console.log("level 1");
//         getTodos('https://jsonplaceholder.typicode.com/todos', (err, data) => {
//             console.log(data);
//             console.log("level 2");
//             getTodos('https://jsonplaceholder.typicode.com/todos', (err, data) => {
//                 console.log(data);
//                 console.log("level 3");
//             });
//         });
//     });
// });

// getTodos();
// getTodos();
// getTodos();

// PROMISE EXAMPLE
const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch something

        // if success
        resolve('some data');

        // if error
        reject('some error');
    });
};

// // the data passed to the then function along with the callback is same as the resolve method in the promise; similarly the reject method
// // the second method passed is used to deal with the error
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// // instead of passing the reject callback function as the second argument to then(), we can use the catch() method
// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })
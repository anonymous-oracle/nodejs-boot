// SCRIPT NEEDS AN HTML FILE
const getTodos = (resource) => {
    // old style request without JSON

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) { // necessary for data validation; once successful move towards parsing the data
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('could not fetch data', undefined);
            }
        });
        request.open('GET', resource);

        request.send();
    });

};

const url = 'https://jsonplaceholder.typicode.com/todos';



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


document.addEventListener('click', () => {
    getTodos(url).then((data) => {
        console.log("PROMISE 1 RESOLVED");
        console.log(data);
        return getTodos(url); // this returns a promise which can be used to chain another sequential execution imitating a recursive or nested execution
    }).then(data => {
        console.log("PROMISE 2 RESOLVED");
        console.log(data);
        // return getTodos(url+'ij'); // use for error catching demonstration
        return getTodos(url);
    }).then(data => {
        console.log("PROMISE 3 RESOLVED");
        console.log(data);
        return getTodos(url);
    }).catch((err) => { // catches the first error that occurs in the chain and skips any chained then() methods in between
        console.log("PROMISE REJECTED");
        console.log(err);
    });
});


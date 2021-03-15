const readline = require('readline');
// create interface to read and write to std input/output streams
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2} ?\nAns: `, (userInput) => {
    if (parseFloat(userInput.trim()) === answer) {
        console.log('That\'s correct');
        // closes the interface
        rl.close();
        return
    }
    // for incorrect answers it reruns the interface logic again
    rl.setPrompt(`The correct answer is: ${userInput}.\nPlease try again...\n`);
    rl.prompt();

    // to keep prompting the user till he/she answers correctly, we add an event listener
    rl.on('line', (userInput) => {
        if (parseFloat(userInput.trim()) === answer) {
            console.log('That\'s correct');
            // closes the interface
            rl.close();
            return
        }
        // for incorrect answers it reruns the interface logic again
        rl.setPrompt(`The correct answer is: ${userInput}.\nPlease try again...\n`);
        rl.prompt();
    });

});

rl.on('close', () => { console.log('The interface has been closed') });
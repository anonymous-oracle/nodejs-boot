const fs = require('fs');

// create/make directory

fs.mkdir('tutorialDir', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Directory created successfully');
        fs.writeFile('./tutorialDir/example.txt', 'Some data', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Data written to file successfully');
            }
        });
    }
});

// delete the directory
fs.rmdir('tutorialDir', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Directory deleted successfully');
    }
});
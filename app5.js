const fs = require('fs');

// CREATE A TEST DIRECTORY WITH FILES
const createNonEmptyDir = ()=>{
    fs.mkdirSync('example',(err)=>{
        if(err){
            console.log(err);
        } else {
            console.log('Successfully created directory');
        }
    });
    fs.writeFileSync('./example/a.txt', 'Some data',(err)=>{
        if(err){
            console.log(err);
        } else {
            console.log('Successfully created a.txt');
        }
    });
    fs.writeFileSync('./example/b.txt', 'Some data',(err)=>{
        if(err){
            console.log(err);
        } else {
            console.log('Successfully created b.txt');
        }
    });
};



// // create/make directory

// fs.mkdir('tutorialDir', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('Directory created successfully');
//         fs.writeFile('./tutorialDir/example.txt', 'Some data', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('Data written to file successfully');
//             }
//         });
//     }
// });

// // delete the directory
// fs.rmdir('tutorialDir', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('Directory deleted successfully');
//     }
// });

// // delete non-empty directory
// fs.unlink('./tutorialDir/example.txt', (err)=>{
// if(err){
//    console.log(err) ;
// } else{
//     console.log('internal file deleted');
//     fs.rmdir('tutorialDir', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         else {
//             console.log('Directory has been deleted');
//         }
//     })
// }
// });

// deleting multiple files in the directory

createNonEmptyDir();

fs.readdir('example', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        for(let file of files){
            fs.unlink(`./example/${file}`, (err)=>{
                if(err){
                    console.log(err);
                } else {
                    console.log('File deleted successfully');
                }
            });
        }
        fs.rmdir('example', (err)=>{
if(err){
    console.log(err);
} else {
    console.log('Successfully deleted the directory');
}
        });
    }
});
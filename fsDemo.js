// import fs from 'fs';
import fs from 'fs/promises';



// ==> Read files

// async promise
// fs.readFile("./public/index.html", 'utf8').then(d => console.log(d)).catch(e => console.log(e));

// Async Await
// const getFile = async () => {
//     try {
//         const d = await fs.readFile("./public/index.html", 'utf8');
//         console.log(d)
//     } catch (err) {
//         console.log(err)
//     }
// };


// Async
// fs.readFile("./public/index.html", 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

// // Sync
// const data = fs.readFileSync("./public/index.html", 'utf8');


// Write Files
const writeIntoFile = async () => {
    try {
        const d = await fs.writeFile('./write.txt', "writeFile: Create a file if does not exists & override it if exists")
    } catch (error) {
        console.log(error)
    }
};
const appendIntoFile = async () => {
    try {
        const d = await fs.appendFile('./append.txt', "\nappendFile: Create a file if does not exists & append the input to it")
    } catch (error) {
        console.log(error)
    }
}

appendIntoFile()
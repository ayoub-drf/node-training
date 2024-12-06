import path from "path";

let pathFile = '/usr/bin/main.py';

const lastPath = path.basename(pathFile); // main.py
const dirName = path.dirname(pathFile) // the current directory /usr/bin/
const extensionName = path.extname(pathFile) // the extension name of a file or nothing if no file
const parseFile = path.parse(pathFile); // Get related info like the extension & the directory &...
const newFilePath = path.join(path.dirname(pathFile), 'src', 'main.ts') // Join return Relative Path:
const newFilePath2 = path.resolve(path.dirname(pathFile), 'src', 'main.ts'); // Resolve return Absolute Path:




// pathDemo.js
import http from 'http';
const PORT = process.env.PORT;
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename)
console.log(__dirname)


const server = http.createServer(async (request, response) => {
    // console.log(request.url)
    // console.log(request.method)
    let filePath;

    try {

        if (request.method === "GET") {

            if (request.url === "/") {
                filePath = path.join(__dirname, "public", "index.html");
            } else if ((request.url === "/about")) {
                filePath = path.join(__dirname, "public", "about.html");
            } else {
                response.end("<h1>Not Found 404</h1>")
            }
            const page = await fs.readFile(filePath)

            response.setHeader('Content-Type', 'text/html');
            response.write(page)
            response.end()

        } else {
            throw new Error('Method GET not allowed')
        }

    } catch (err) {
        response.writeHead(500, {'Content-Type': 'text/html',})
        .end("<h1>Server Error</h1>")
    }

});

server.listen(PORT, () => {
    console.log('Server running on port 80')
})
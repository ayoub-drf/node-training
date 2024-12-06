import http from "http";
import { json } from "stream/consumers";
const PORT = process.env.PORT;

const users = [
    {id: 1, name: "james"},
    {id: 2, name: "dexter"},
]

const logger = (req, res, next) => {
    console.log(req.method + " Logger Middleware " + req.url)
    next()
};

const createNewUser = (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    let data = '';
    req.on('data', (chunk) => {
        data += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(data)
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
};

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        if (req.method === 'GET') {
            if (req.url === "/api/users") {
                res.setHeader("Content-Type", "text/plain");
                res.statusCode = 200;
                res.write(JSON.stringify(users))
                res.end()
            } else if (req.url.match(/\/api\/users\/([0-8]+)/)) {
                const id = req.url.split('/')[3];
                const user = users.find(e => e.id === parseInt(id))
                res.setHeader("Content-Type", "text/plain");
                res.statusCode = 200;
                if (user) {
                    res.write(JSON.stringify(user))
                } else {
                    res.write(JSON.stringify({"message": "user not found"}))
                }
                res.end()
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.write('Hello world x')
                res.end()
            }
        } else if (req.method === 'POST') {
            createNewUser(req, res);
        }
    })
});


server.listen(PORT, () => {
    console.log('Server running on port 80')
})
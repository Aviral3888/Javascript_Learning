const http = require('http');

console.log("CL 1");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        console.log("/ req received");
        res.write("Request received");
        res.end();
    }

    if (req.url == "/api/get/users") {
        console.log("/api/get/users req received");
        res.write(JSON.stringify([{ name: "John" }, { name: "Jane" }]));
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server listening on Port 3000");
})

console.log("CL 2");

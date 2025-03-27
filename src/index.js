const http = require("http");
const users = require("./mocks/users")

const server = http.createServer((request, response) => {

    console.log(`Request method: ${request.method} and Endpoint: ${request.url}`);

    if(request.url === "/users" && request.method === "GET") {
        response.writeHead(200, { "content-type": "application/json" });
        response.end(JSON.stringify(users));
    } else {
        response.writeHead(404, { "content-type": "text/html" });
        response.end("<h1>Error 404</h1>");
    }

    // response.writeHead(200, { "content-type": "text/html" });
    // response.end("<h1>Hello!</h1>");
})

server.listen(3000, () => console.log("servidor de pé"));
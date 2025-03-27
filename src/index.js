const http = require("http");
const routes = require("./routes")
const server = http.createServer((request, response) => {

    console.log(`Request method: ${request.method} and Endpoint: ${request.url}`);
    const route = routes.find(route => route.endpoint === request.url && route.method === request.method )

    if(route) {
        route.handler(request, response)
    } else {
        response.writeHead(404, { "Content-Type": "text/html" })
        response.end("<h1>Error 404</h1>")
    }
    // if(request.url === "/users" && request.method === "GET") {
    //     controller.listUsers(request, response)
    // } else {
    //     response.writeHead(404, { "content-type": "text/html" });
    //     response.end("<h1>Error 404</h1>");
    // }

    // response.writeHead(200, { "content-type": "text/html" });
    // response.end("<h1>Hello!</h1>");
})

server.listen(3000, () => console.log("servidor de pé"));
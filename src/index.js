const http = require("http");
const routes = require("./routes");
const url = require("url");

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    console.log(`Request method: ${request.method} and Endpoint: ${parsedUrl.pathname}`);
    const route = routes.find(route => route.endpoint === parsedUrl.pathname && route.method === request.method )

    if(route) {
        request.query = parsedUrl.query;
        route.handler(request, response)
    } else {
        response.writeHead(404, { "Content-Type": "text/html" })
        response.end("<h1>Error 404</h1>" + parsedUrl.pathname)
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
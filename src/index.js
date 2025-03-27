const http = require("http");
const routes = require("./routes");
// const url = require("url");
const { URL } = require("url");
const bodyParser = require("./helpers/bodyParsers")

const server = http.createServer((request, response) => {
    const parsedUrl = new URL(`http://localhost:3000${request.url}`);
    let { pathname } = parsedUrl;
    let id = null;
    const splitEndpoint = pathname.split("/").filter(Boolean);

    if(splitEndpoint.length > 1) {
        pathname = `/${splitEndpoint[0]}/:id`;
        id = splitEndpoint[1];
    }

    console.log(`Request method: ${request.method} and Endpoint: ${pathname}`);
    const route = routes.find(route => route.endpoint === pathname && route.method === request.method );

    

    if(route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        request.params = { id };

        response.send = (statusCode, body) => {
            response.writeHead(statusCode, { "content-type": "application/json" });
            response.end(JSON.stringify(body));
        }

        if(["POST", "PUT", "PATCH"].includes(request.method)) {
            bodyParser(request, () => route.handler(request, response))
        } else {
            route.handler(request, response);
        }

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
function bodyParsers (request, callback) {
    let body = "";
    request.on("data", (chunk) => {
        body += chunk;
    });
    
    request.on("end", () => {
        body = JSON.parse(body);
        request.body = body;
        callback();
    })
}

module.exports = bodyParsers;
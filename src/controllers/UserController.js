const users = require("../mocks/users")

module.exports = {
    listUsers(request, response) {
        const { order } = request.query;

        const sortedArr = users.sort((a, b) => {
            if(order === "desc") {
                return a.id < b.id ? 1 : -1;
            }

            return a.id > b.id ? 1 : -1;
        })
        response.writeHead(200, { "content-type": "application/json" });
        response.end(JSON.stringify(sortedArr));
    }
}
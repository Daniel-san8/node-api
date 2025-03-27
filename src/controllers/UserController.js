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
        response.send(200, sortedArr);
    },

    getUserById (request, response) {
        const { id } = request.params;
        const user = users.find(user => user.id === Number(id));

        if(!user) {
            response.send(400, { error: "user not found" });
        } else {     
            response.send(200, user);
        }

    },

    postCreateUser (request, response) {
        const { body } = request;
        const lastUserId = users[users.length - 1].id;
        const userObj = {
            id: lastUserId + 1,
            name: body.name
        };

        users.push(userObj);
        response.send(200, userObj);
    },
}
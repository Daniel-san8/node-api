const controller = require("./controllers/UserController")


module.exports = [
    {
        endpoint: "/users",
        method: "GET",
        handler: controller.listUsers
    },
    {
        endpoint: "/users/:id",
        method: "GET",
        handler: controller.getUserById
    },

]
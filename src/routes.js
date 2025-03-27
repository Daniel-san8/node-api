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
    {
        endpoint: "/users",
        method: "POST",
        handler: controller.postCreateUser
    },
    {
        endpoint: "/users/:id",
        method: "PUT",
        handler: controller.putUpdateUser
    },
    {
        endpoint: "/users/:id",
        method: "DELETE",
        handler: controller.deleteUserId
    },

]
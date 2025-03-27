const controller = require("./controllers/UserController")


module.exports = [
    {
        endpoint: "/users",
        method: "GET",
        handler: controller.listUsers
    },
    {
        endpoint: "/users",
        method: "POST",
        handler: controller.listUsers
    },

]
const {Sequelize} = require("sequelize")
module.exports = new Sequelize(
   "telegram-bot", // Name DB
    "postgres", // User
    "akmal02032009", // Password
    {
        dialect: "postgres",
        host: "localhost",
        port: "5432"
    }
)
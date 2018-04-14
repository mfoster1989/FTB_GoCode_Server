// Update with your config settings.

//comment line below for local
require("dotenv").load()
module.exports = {

  development: {
    client: "pg",
    connection: "postgresql://localhost/FTB_server"
  },

  production: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
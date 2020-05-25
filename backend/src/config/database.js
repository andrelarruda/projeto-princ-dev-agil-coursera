require("dotenv").config();
module.exports = {
   development: {
      dialect: "mysql",
      host: "localhost",
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      define: {
         timestamps: true,
      },
      seederStorage: "sequelize",
   },
   test: {
      dialect: "mysql",
      host: "localhost",
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_TEST,
      define: {
         timestamps: true,
      },
      seederStorage: "sequelize",
   },
};

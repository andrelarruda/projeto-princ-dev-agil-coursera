module.exports = {
   test: {
      dialect: "mysql",
      host: "localhost",
      username: "root",
      password: "85851220",
      database: "esseeujalitest",
      define: {
         timestamps: true,
      },
      seederStorage: "sequelize",
   },
   development: {
      dialect: "mysql",
      host: "localhost",
      username: "root",
      password: "85851220",
      database: "esseeujali",
      define: {
         timestamps: true,
      },
      seederStorage: "sequelize",
   },
};

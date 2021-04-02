const os = require('os');

module.exports = {
  env: 'localhost',

  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: '',
    database: 'development',
    host: 'localhost',
    logging: console.log,
    operatorsAliases: false,
  },

  // database: {
  //   username: 'root',
  //   dialect: 'mysql',
  //   password: '',
  //   database: 'development',
  //   host: 'localhost',
  //   logging: console.log,
  //   operatorsAliases: false,
  // },

  email: {
    comment: 'See https://nodemailer.com',
    from: 'saleemshah567@gmail.com',
    host: 'smtp.sendgrid.net',
    auth: {
      user: 'apikey',
      pass: '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',
    },
  },

  graphiql: true,

  clientUrl: 'http://localhost:8081',

  defaultUser: '<insert your email here>',

  uploadDir: os.tmpdir(),

  authJwtSecret: 'db531de1-787c-4ed4-ab54-45544247b188',
};

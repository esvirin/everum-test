const {Sequelize} = require('sequelize');
module.exports =  new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql'
    });






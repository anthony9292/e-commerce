require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASSWORD, { 
      host: process.env.DB_HOST,
      dialect: 'mysql',
     port: process.en.DB_PORT, 
    
     //prohibits mysql form switching decimals to strings to keep precision
     // because of this there will be no precision issues, so we can opt out of this default behavior
     dialectOption: { decimalNumbers: true}


      }
    );

module.exports = sequelize;

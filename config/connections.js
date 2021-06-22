require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize =  process.env.JAWSDB_URL
 ? new Sequelize(process.env.JAWSDB_URL)
 : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_Pw, { 
   host : 'localhost', 
   dialect: 'mysql', 
   dialectOption: { 
     //prohibits mysql form switching decimals to strings to keep precision
     // because of this there will be no precision issues, so we can opt out of this default behavior
     decimalNumbers: true,
   },
 });
  
module.exports = sequelize; 
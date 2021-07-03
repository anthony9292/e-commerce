const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequalize =  require('./config/connections');

const app = express();
const PORT = process.env.PORT || 3304;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequalize.sync({ force: false }).then(() => { 
  app.listen(PORT, () => console.log('App listing on port ${PORT}!'));
});

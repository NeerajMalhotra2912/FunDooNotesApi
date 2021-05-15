/**
 * @description Express.js is a back end web application framework for Node.js which can be used for writing business logic.
 */
const express = require('express');
require('./config/databaseConfig.js');
// const logger = require('./Logger/logger.js');

const port = process.env.PORT;
// const host = process.env.HOST;

const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
//use is a way to register middleware or chain of middlewares before executing any end route logic.
app.use(express.json());

// parse requests of content-type - application/json
// app.use(bodyParser.json())
app.use(express.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Fun Doo Notes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Require Notes routes
require('./app/routes/user.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
module.exports = app;
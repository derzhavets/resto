const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/resto';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/resto', routes);

let port = 3000;

app.listen(port, () => {
    console.log('Server is spinning at ' + port + ' rpm');
});
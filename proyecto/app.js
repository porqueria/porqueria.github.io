

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Console } = require('console');
const app = express();

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { ifError } = require('assert');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.set('strictQuery', false);

const mongo_uri = 'mongodb://dev:dev@localhost/todos';

mongoose.connect(mongo_uri, function(err) {
    if(err) {
        throw err;
    } else {
        console.log('Successfully connected to ${mongo_uri}');
    }
});


app.get('/', (req, res) =>{
});

app.listen(3000, () =>{
        console.log('serve started');
        })

        module.exports = app;
        





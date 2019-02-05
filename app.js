const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./db');
const collection = 'todo';
const app = express();

app.use(bodyParser.json());

db.connect((err) => {
    if(err) {
        console.log('unable to connet to database');
        process.exit(1);
    } else {
        app.listen(3000, () => {
            console.log('connected to database, app is listening on port 3000');
        })
    }
})
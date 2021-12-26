const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = 3000;
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const url = process.env.MONGOLAB_URI;

app.use(bodyparser.json());

const AuthRoute = require('./routes/auth');

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
};

mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app.use('/api', AuthRoute);
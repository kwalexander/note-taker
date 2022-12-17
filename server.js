const fs = require('fs');
const path = require('path');
const { notes } = require('./db/db.json');

//require express
const express = require('express');

// declare which port to use
const PORT = process.env.PORT || 3001;

//instantiate the server
const app = express();

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// method to use middleware that instructs server to make certain files readily available and not gate behind a server endpoint (recycled from prior class assignment)
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// method  executed by Express.js server that mounts a function to the server that requests will passthrough before getting to the endpoint. And then parse incoming JSON data
app.use(express.json());

// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
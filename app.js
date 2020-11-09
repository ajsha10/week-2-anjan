'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const rootRoute = require('./routes/rootRoute');
const catRoute = require('./routes/catRoute');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

// routes
app.use('/', rootRoute);
app.use('/cat', catRoute);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));

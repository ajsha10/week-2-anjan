'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rootRoute = require('./routes/rootRoute');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute.js');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'production') {
  require('./production')(app, process.env.PORT);
} else {
  require('./localhost')(app, process.env.HTTPS_PORT, process.env.HTTP_PORT);
}

// routes
app.use('/', rootRoute);
app.use('/cat', catRoute);
app.use('/user', userRoute);
//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//https.createServer(options, app).listen(httpsPort, () => console.log(`And https on port ${httpsPort}`));

/*const myArr = [3, 1, 17, 42, 73, 11, 2, 7];
const mapArr = myArr.map(i => i * 3);
const filterArr = myArr.filter(i => i > 10);
const reduced = myArr.reduce((acc, i) => acc += i);
console.log('original', myArr, 'map', mapArr, 'filter', filterArr, 'reduce', reduced);*/
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter')
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

const host = 'localhost';
const port = 3000;

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);
server.listen(port,host, () => {
    console.log(`server is listening at http://${host}:${port}`);
})


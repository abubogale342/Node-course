const express = require('express');
const http = require('http');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

const host = 'localhost';
const port = 3000;


app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is express server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port,host, () => {
    console.log(`server is listening at http://${host}:${port}`);
})


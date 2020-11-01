const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter')
const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

const host = 'localhost';
const port = 3000;

app.use('/dishes',dishRouter)
// app.use((req,res,next) => {
//     console.log(req.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>This is express server</h1></body></html>');
// });

// app.all('/dishes', (req, res,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// });

// app.get('/dishes', (req, res,next) => {
//     res.end(`dishes will be sent to your browser`)
// });

// app.post('/dishes', (req, res,next) => {
//     res.end(`will add dish ${req.body.name} with details ${req.body.description}`)
// });

// app.put('/dishes', (req, res,next) => {
//     res.statusCode = 403
//     res.end('put operation is not supported')
// });

// app.delete('/dishes', (req, res,next) => {
//     res.end(`deleting all operations`)
// });

// app.get('/dishes/:dishId', (req, res,next) => {
//     res.end(`dishes will be sent to your browser of id ${req.params.dishId}`)
// });

// app.post('/dishes/:dishId', (req, res,next) => {
//     res.statusCode = 403
//     res.end(`post operation failed`)
// });

// app.put('/dishes/:dishId', (req, res,next) => {
//     res.write(`updating the dish ${req.params.dishId}`)
//     res.end(`will update dish ${req.body.name} with details ${req.body.description}`)
// });

// app.delete('/dishes/:dishId', (req, res,next) => {
//     res.end(`deleting dish ${req.params.dishId}`)
// });

const server = http.createServer(app);
server.listen(port,host, () => {
    console.log(`server is listening at http://${host}:${port}`);
})


const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router()
dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all((req, res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res,next) => {
    res.end(`dishes will be sent to your browser`)
})
.post((req, res,next) => {
    res.end(`will add dish ${req.body.name} with details ${req.body.description}`)
})
.put((req, res,next) => {
    res.statusCode = 403
    res.end('put operation is not supported')
})
.delete((req, res,next) => {
    res.end(`deleting all operations`)
})

module.exports = dishRouter;
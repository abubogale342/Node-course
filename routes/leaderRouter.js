const express = require('express')
const bodyParser = require('body-parser')

const leaderRouter = express.Router()
leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
    .all((req, res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res,next) => {
        res.end(`leaders will be sent to your browser`)
    })

    .post((req, res,next) => {
        res.end(`will add leaders ${req.body.name} with details ${req.body.description}`)
    })

    .put((req, res,next) => {
        res.statusCode = 403
        res.end('put operation is not supported')
    })

    .delete((req, res,next) => {
        res.end(`deleting all operations`)
    })

leaderRouter.route('/:leadersId')
    .all((req, res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res,next) => {
        res.end('We will send details of the leaders: ' + req.params.leadersId + ' to you!')
    })

    .post((req, res,next) => {
        res.end(`will add leaders ${req.body.name} with details ${req.body.description}`)
    })

    .put((req, res,next) => {
        res.statusCode = 403
        res.end('put operation is not supported')
    })

    .delete((req, res,next) => {
        res.end(`deleting all operations`)
    })

module.exports = leaderRouter;
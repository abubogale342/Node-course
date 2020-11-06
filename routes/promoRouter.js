const express = require('express')
const bodyParser = require('body-parser')

const promoRouter = express.Router()
promoRouter.use(bodyParser.json())

promoRouter.route('/')
    .all((req, res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res,next) => {
        res.end(`promotions will be sent to your browser`)
        console.log(req.params)
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

promoRouter.route('/:promotions')
    .all((req, res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res,next) => {
        res.end('We will send details of the promotions' + req.params.promotions + ' to you!')
    })

    .post((req, res,next) => {
        res.end(`will add promotions {req.body.name} with details ${req.body.description}`)
    })

    .put((req, res,next) => {
        res.statusCode = 403
        res.end('put operation is not supported')
    })

    .delete((req, res,next) => {
        res.end(`deleting all operations`)
    })

module.exports = promoRouter;
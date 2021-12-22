import * as express from 'express';
const cheeses = require('./data/cheeses.json');
const recent = require('./data/recent.json');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {
    res.json(cheeses);
});

//register new router for recent purchase and purchase button
router.get('/api/recent', (req, res, next) => {
    res.json(recent);
});

router.post(`/api/purchase`, (req, res, next)=>{
    console.log('')
})

export default router;
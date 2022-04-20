const router = require('express').Router();
const {Quote} = require('../../models')

router.get('/', (req, res) => {
    Quote.findAll()
    .then(dbQuoteData => res.json(dbQuoteData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.post('/', (req, res) => {
    console.log('heyheyhey', req)
    Quote.create({
        name: req.body.name,
        email: req.body.email,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        phone_number: req.body.phone_number,
        
    })
    .then(dbQuoteData => res.json(dbQuoteData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router
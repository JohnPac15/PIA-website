const router = require("express").Router();
const { Auto, Homeowners, PolicyOwner } = require("../models");

router.get('/', (req, res) => {
    res.render('request-quote')
})

module.exports = router
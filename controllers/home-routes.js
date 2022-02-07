const router = require('express').Router();
const sequelize = require('../config/connection');
const { Auto, Homeowners, Policies, PolicyOwner } = require('../models');

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
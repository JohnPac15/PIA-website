const router = require('express').Router();
const sequelize = require('../config/connection');
const passport = require('../auth/local');
const { Auto, Homeowners, Policies, User } = require('../models');

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
      
  res.render('login');
});

module.exports = router;
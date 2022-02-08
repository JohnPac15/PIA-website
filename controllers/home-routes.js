const router = require('express').Router();
const { Auto, Homeowners, Policies, PolicyOwner } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('dashboard');
      return;
    }
      
  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('dashboard');
      return;
    }
      
  res.render('register');
});

module.exports = router;
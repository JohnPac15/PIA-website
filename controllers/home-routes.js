const router = require('express').Router();
const { Auto, Homeowners, Policies, PolicyOwner } = require('../models');
const authHelpers = require('../auth/_helpers');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.render('dashboard');
      return;
    }
      
  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.loggedIn) {
      res.render('dashboard');
      return;
    }
      
  res.render('register');
});

router.get('/dashboard', authHelpers.loginRequired, (req, res) => {
  res.render('dashboard');
});

module.exports = router;
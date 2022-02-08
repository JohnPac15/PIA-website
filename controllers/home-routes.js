const router = require('express').Router();
const { Auto, Homeowners, Policies, PolicyOwner } = require('../models');
const authHelpers = require('../auth/_helpers');

router.get('/', (req, res) => {
  console.log(req.session);
  res.render('homepage', {loggedIn: req.session.loggedIn});
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

router.get('/admin', authHelpers.adminRequired, (req, res) => {
  res.render('admin', {
    loggedIn: req.session.loggedIn,
    admin: req.session.admin});
});

module.exports = router;
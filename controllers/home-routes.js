const router = require('express').Router();
const sequelize = require('../config/connection');
const passport = require('../auth/local');
const authHelpers = require('../auth/_helpers');
const { Auto, Homeowners, Policies, User } = require('../models');

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

router.post('/register', (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,    
    password: req.body.password
  })
  .then((dbUserData) => res.json(dbUserData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;
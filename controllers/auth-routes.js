const router = require('express').Router();
const { response } = require('express');
const validator = require('validator');
const { PolicyOwner } = require('../models');

router.post('/register', (req, res)  => {
  // route for new users to register for an account    
  const emailCheck = validator.isEmail(req.body.email);
  if (!emailCheck) {
    res.status(400).json({ message: 'Please enter a valid email!' });
    res.render('/register')
  }
  //checks to see if username is already taken
  PolicyOwner.findOne({
    where: {
     username: req.body.username
    }
  })
  .then(dbUserData => {
  if (!dbUserData){  
  PolicyOwner.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    policyOwner: req.body.policyOwner
  })
  .then(dbUserData => {
    if (!req.session.admin){
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.admin = dbUserData.admin;
        req.session.loggedIn = true;
  
        res.json(dbUserData);
      });
    }
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
  } else {
    res.status(400).json({ message: 'That username is not available!' });
  }
  })
});
// user logs in with username and password
router.post('/login', (req, res) => {
  PolicyOwner.findOne({
    where: {
     username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect username or password!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.admin = dbUserData.admin;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});
// closes session for user
router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy();
    res.render("homepage");
  } else {
    res.status(404).end();
  }
});

module.exports = router;
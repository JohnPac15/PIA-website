const router = require('express').Router();
const { PolicyOwner } = require('../models');

router.post('/register', (req, res)  => {
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
    username: req.body.username,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.admin = dbUserData.admin;
      req.session.loggedIn = true;
  
      res.json(dbUserData);
    });
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

router.post('/login', (req, res) => {
  PolicyOwner.findOne({
    where: {
     username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
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

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();      
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
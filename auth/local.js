const req = require('express/lib/request');
const res = require('express/lib/response');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');
const init = require('./passport');

init();

passport.use(new LocalStrategy(function(username, password, done) {
  console.log("moved to use method for ", username)
  User.findOne({
    where: {
      username: username
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect username or password' });
      return;
    }

    const validPassword = dbUserData.checkPassword(password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password!' });
      return;
    }
    console.log("exiting check");
  return done (null, dbUserData);
  });  
}));  

module.exports = passport;
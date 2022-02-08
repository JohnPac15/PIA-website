const req = require('express/lib/request');
const passport = require('passport');
const { User } = require('../models');

module.exports = () => {

  passport.serializeUser((username, done) => {
    done(null, username);
  });

  passport.deserializeUser((username, done) => {
    User.findOne({
        where: {
          username: username
        }
      })
      .then((user) => { done(null, user); })
      .catch((err) => { done(err,null); });
  });
  
};
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { PolicyOwner } = require('../models');
const init = require('./passport');

init();

passport.use('local', new LocalStrategy(function(username, password, done) {
  console.log("moved to use method for ", username)
  PolicyOwner.findOne({
    where: {
      username: username
    }
  })
  .then ((user) => {
    if (!user) { return done (null, false); }
    const userPassword = user.password;
    const validPassword = function (userPassword, password) {
      return bcrypt.compareSync(userPassword, password);
    }
    if (validPassword) {return done (null, user);
    } else { return done (null, false)}
  })
  .catch ((err) => {done (err)});
}));

module.exports = passport;
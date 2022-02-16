const router = require('express').Router();
const { PolicyOwner } = require('../models');
// checks to ensure user is logged in to access function
const loginRequired = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};
// checks to ensure admin user is logged in to access function
const adminRequired = (req, res, next) => {
  if (!req.session.user_id) { res.redirect('/login'); }
  PolicyOwner.findOne({
    where: {
     username: req.session.username
    }
  })  
  .then((user) => {
    if (!user.admin) res.status(401).json({status: 'You are not authorized'});
    return next();
  })
  .catch((err) => {
    res.status(500).json({status: 'Something bad happened'});
  });
}
// if already logged in, doesn't try to login again
function loginRedirect(req, res, next) {
    if (req.session.loggedIn) return res.status(401).json(
      {status: 'You are already logged in'});
    return next();
}

module.exports = {
  loginRequired,
  adminRequired,
  loginRedirect
};
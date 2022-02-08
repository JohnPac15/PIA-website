const express = require('express');
const router = express.Router();
const req = require('express/lib/request');
const res = require('express/lib/response');

const authHelpers = require('../auth/_helpers');
const passport = require('../auth/local');

router.post('/register', authHelpers.loginRedirect, (req, res, next)  => {
  return authHelpers.createUser(req, res)
  .then((user) => {
    handleLogin(res, user[0]);
  })
  .then(() => { handleResponse(res, 200, 'success'); })
  .catch((err) => { handleResponse(res, 500, 'error'); });
});

router.post('/login', authHelpers.loginRedirect, 
  passport.authenticate('local', {successRedirect:'/dashboard', failureRedirect: '/login' }),
    function(req, res) {
    console.log('updating session'); 
    req.session.username = res.body.username;
    req.session.loggedIn = true;

    res.json({ user: dbUserData, message: 'You are now logged in!' }); 
    } 
);

router.get('/logout', authHelpers.loginRequired, (req, res, next) => {
  req.logout();
  handleResponse(res, 200, 'success');
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports = router;
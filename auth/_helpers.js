const router = require('express').Router();
const { PolicyOwner } = require('../models');

const loginRequired = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

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

function loginRedirect(req, res, next) {
    if (req.session.loggedIn) return res.status(401).json(
      {status: 'You are already logged in'});
    return next();
}

function adminRequired(req, res, next) {
    if (!req.user) res.status(401).json({status: 'Please log in'});
    return knex('users').where({username: req.user.username}).first()
    .then((user) => {
      if (!user.admin) res.status(401).json({status: 'You are not authorized'});
      return next();
    })
    .catch((err) => {
      res.status(500).json({status: 'Something bad happened'});
    });
}

function loginRedirect(req, res, next) {
    if (req.user) return res.status(401).json(
      {status: 'You are already logged in'});
    return next();
}

function handleErrors(req) {
  return new Promise((resolve, reject) => {
    if (req.body.username.length < 6) {
      reject({
        message: 'Username must be longer than 6 characters'
      });
    }
    else if (req.body.password.length < 6) {
      reject({
        message: 'Password must be longer than 6 characters'
      });
    } else {
      resolve();
    }
  });
}

module.exports = {
  loginRequired,
  adminRequired,
  loginRedirect
};
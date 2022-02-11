const router = require("express").Router();
const { Auto, Homeowners, PolicyOwner } = require("../models");
const authHelpers = require("../auth/_helpers");

router.get('/', (req, res) => {
    res.render('create-admin');
})

router.post('/', (req, res) => {
    PolicyOwner.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        policyowner: req.body.password,
        admin: req.body.admin
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
})

module.exports = router
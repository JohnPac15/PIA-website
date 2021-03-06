const router = require("express").Router();
const { Auto, Homeowners, PolicyOwner } = require("../models");
const authHelpers = require("../auth/_helpers");
// only users and admins who are logged in can look up a user
router.get('/:id', authHelpers.loginRequired, (req,res) => {
    console.log(req.params.id)
    PolicyOwner.findOne({
        where: {
            id: req.params.id
          }
    })
    .then(dbPolicyownerDate => {
        const user = dbPolicyownerDate.get({ plain: true })
        res.render("edit-policyowner", { user,
            loggedIn: req.session.loggedIn,
            admin: req.session.admin
          });
    })
})
//only an admin can pull up a policy to edit
router.get('/home/:id', authHelpers.adminRequired, (req,res) => {
    Homeowners.findOne({
        where: {
            id: req.params.id
          }
    })
    .then(dbHomeownerDate => {
        const user = dbHomeownerDate.get({ plain: true })
        res.render("edit-home-policy", { user,
            loggedIn: req.session.loggedIn,
            admin: req.session.admin
          });
    })
})
//only an admin can pull up a policy to edit
router.get('/auto/:id', authHelpers.adminRequired, (req,res) => {
    Auto.findOne({
        where: {
            id: req.params.id
          }
    })
    .then(dbAutoDate => {
        const user = dbAutoDate.get({ plain: true })
        res.render("edit-auto-policy", { user,
            loggedIn: req.session.loggedIn,
            admin: req.session.admin
          });
    })
})

module.exports = router
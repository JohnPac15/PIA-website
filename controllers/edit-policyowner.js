const router = require("express").Router();
const { Auto, Homeowners, PolicyOwner } = require("../models");
const authHelpers = require("../auth/_helpers");
const { get } = require("./api");

router.get('/', authHelpers.loginRequired, (req,res) => {
    PolicyOwner.findOne({
        where: {
            id: req.session.user_id,
          }
    })
    .then(dbPolicyownerDate => {
        const user = dbPolicyownerDate.get({ plain: true })
        console.log(user)
        res.render("edit-policyowner", { user,
            loggedIn: req.session.loggedIn,
            admin: req.session.admin,
          });
    })
})

module.exports = router
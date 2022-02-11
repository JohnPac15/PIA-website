const router = require("express").Router();
const { Auto, Homeowners, PolicyOwner } = require("../models");
const authHelpers = require("../auth/_helpers");

router.get('/:id', authHelpers.loginRequired, (req,res) => {
    console.log(req)
    PolicyOwner.findOne({
        where: {
            id: req.session.user_id
          }
    })
    .then(dbPolicyownerDate => {
        const user = dbPolicyownerDate.get({ plain: true })
        // console.log(user,'--------------')
        res.render("edit-policyowner", { user,
            loggedIn: req.session.loggedIn,
            admin: req.session.admin,
            user_id: req.session.user_id
          });
    })
})

module.exports = router
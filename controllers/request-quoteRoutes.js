const router = require("express").Router();
const { Auto, Homeowners, PolicyOwner } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session.user_id);
  if (req.session.user_id === undefined) {
    res.render("request-quote");
  } else {
    PolicyOwner.findOne({
      where: {
        id: req.session.user_id,
      },
      include: [
        {
          model: Homeowners,
        },
        {
          model: Auto,
        },
      ],
    }).then((dbPolicyData) => {
      const user = dbPolicyData.get({ plain: true });
      res.render("request-quote", {
        user,
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        user_id: req.session.user_id,
      });
    });
  }
});

module.exports = router;

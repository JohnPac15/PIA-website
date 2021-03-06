const router = require("express").Router();
const { Auto, Homeowners, PolicyOwner } = require("../models");
const authHelpers = require("../auth/_helpers");

router.get("/", (req, res) => {
  console.log(req.session);
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    admin: req.session.admin,
    user_id: req.session.user_id
  });
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard", {
      loggedIn: req.session.loggedIn,
      admin: req.session.admin,
      user_id: req.session.user_id
    });

    return;
  }

  res.render("login");
});

router.get("/register", (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard",  {
      loggedIn: req.session.loggedIn,
      admin: req.session.admin,
      user_id: req.session.user_id
    });
    return;
  }

  res.render("register");
});

router.get("/information", (req, res) => {
    res.render("information")
});

router.get("/dashboard", authHelpers.loginRequired, (req, res) => {
  PolicyOwner.findOne({
    where: {
      id: req.session.user_id,
    },
    include: [
      {
        model: Homeowners
      },
      {
        model: Auto
      }
    ]

  })
  .then(dbPolicyData => {
    const user = dbPolicyData.get({ plain: true })  
    res.render("dashboard", {user,
      loggedIn: req.session.loggedIn,
      admin: req.session.admin,
      user_id: req.session.user_id
    });
  })
});

router.get("/admin", authHelpers.adminRequired, (req, res) => {
  PolicyOwner.findAll({
    where: {
      policy_owner: true
    },
    include: [
      {
        model: Homeowners
      },
      {
        model: Auto
      }
    ]

  })
  .then(dbPolicyOwnerData => {
    const user = dbPolicyOwnerData.map(policy_owner => policy_owner.get({ plain: true }));
    res.render("admin", {user,
      loggedIn: req.session.loggedIn,
      admin: req.session.admin,
      user_id: req.session.user_id
    });
  })
});

router.get("/account-manager", (req,res) => {
  res.render("account-manager")
})

module.exports = router;

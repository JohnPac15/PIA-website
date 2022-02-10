const router = require("express").Router();
const { Auto, Homeowners, PolicyOwner } = require("../models");
const authHelpers = require("../auth/_helpers");

router.get("/", (req, res) => {
  console.log(req.session);
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    admin: req.session.admin});
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard", {
      loggedIn: req.session.loggedIn,
      admin: req.session.admin});
    return;
  }

  res.render("login");
});

router.get("/register", (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard", {
      loggedIn: req.session.loggedIn,
      admin: req.session.admin});
    return;
  }

  res.render("register");
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
    
    console.log(user)
    
    res.render("dashboard", {user,
      loggedIn: req.session.loggedIn,
      admin: req.session.admin,
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
    console.log(user);
    res.render("admin", {user,
      loggedIn: req.session.loggedIn,
      admin: req.session.admin,
    });
  })
});

router.get("/add/auto", (req, res) => {

  res.render("newauto", {
    auto: true,
    homeowner: false
  });
})

router.post("/add/homeowner", authHelpers.adminRequired, (req, res) => {

  res.render("admin", {
    auto: false,
    homeowner: true
  });
})
module.exports = router;

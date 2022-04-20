const router = require("express").Router();
const { Auto, Homeowners, PolicyOwner, Quote} = require("../models");

router.get("/", (req, res) => {
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

router.post('/', (req, res) => {
  console.log('heyheyhey', req.body)
  Quote.create({
      name: req.body.Name,
      email: req.body.email,
      street_address: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zipCode,
      phone_number: req.body.phone,
      
  })
  .then(dbQuoteData => res.json(dbQuoteData))
  .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})


module.exports = router;

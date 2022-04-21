const router = require("express").Router();
const nodemailer = require("nodemailer");
const { Auto, Homeowners, PolicyOwner, Quote } = require("../models");

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

router.post("/", (req, res) => {
  // console.log("heyheyhey", req.body);
  Quote.create({
    name: req.body.Name,
    email: req.body.email,
    street_address: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zipCode,
    phone_number: req.body.phone,
  })
    .then((dbQuoteData) => {
      res.json(dbQuoteData);
      console.log('STOP IT',dbQuoteData.dataValues);

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "pianewquote@gmail.com",
          pass: "PIApass2022",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      const MailOptions = {
        from: "pianewquote@gmail.com",
        to: "John@paciniinsurance.com",
        subject: "New QUOTE",
        text: `
        ID: ${dbQuoteData.dataValues.id}

        Name: ${dbQuoteData.dataValues.name}
        
        Email: ${dbQuoteData.dataValues.email}`
  

      };

      transport.sendMail(MailOptions, (error, info) => {
        console.log(info, "info")
        if(error) {
            console.log(error)
        }
        console.log(`message sent: ${info.response}`)
      })
    
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

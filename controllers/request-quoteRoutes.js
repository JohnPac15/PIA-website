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
  console.log("heyheyhey", req.body);
  Quote.create({
    name: req.body.Name,
    email: req.body.email,
    street_address: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zipCode,
    phone_number: req.body.phone,
    DOB: req.body.DOB,
    occupation: req.body.occupation,
    contact_time: req.body.contact_time,
    textarea: req.body.textarea
    // year_built: req.body.year_built,
    // dwelling_value: req.body.dwelling_value,
    // foundation: req.body.foundation,
    // age_of_roof: req.body.age_of_roof,
    // type_of_roof: req.body.type_of_roof,
    // type_of_siding: req.body.type_of_siding,
    // square_footage: req.body.square_footage,
    // property_size: req.body.property_size,
    // Driver_name: req.body.Driver_name,
    // DL_number: req.body.DL_number,
    // vehicle_year: req.body.vehicle_year,
    // vehicle_make: req.body.vehicle_make,
    // vehicle_model: req.body.vehicle_model,
    // VIN: req.body.vin,
    // vehicle_usage: req.body.vehicle_usage,
    // lien_holder: req.body.lien_holder,
    // deductible_amount: req.body.deductible_amount
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
        
        Email: ${dbQuoteData.dataValues.email}
        
        Street Address: ${dbQuoteData.dataValues.street_address}
        
        City: ${dbQuoteData.dataValues.city}
        
        State: ${dbQuoteData.dataValues.state}
        
        Zip Code: ${dbQuoteData.dataValues.zip_code}
        
        Phone Number: ${dbQuoteData.dataValues.phone_number}

        Driver DOB: ${dbQuoteData.dataValues.DOB}
        
        Occupation: ${dbQuoteData.dataValues.occupation}
        
        Contact Time: ${dbQuoteData.dataValues.contact_time}
        
        Textarea: ${dbQuoteData.dataValues.textarea}`
  

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

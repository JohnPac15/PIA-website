const router = require('express').Router();
const {User, Policies, Homeowners, Auto} = require('../../models');

router.get('/', (req,res) =>{
    Homeowners.findAll({
        include:{
            model: User
        }
    })
    .then(dbHomeownerData => res.json(dbHomeownerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.post('/', (req, res) => {
    Homeowners.create({
        company_name: req.body.company_name,
        aunnal_premiun: req.body.aunnal_premiun,
        policy_number: req.body.policy_number,
        expiration_date: req.body.expiration_date,
        property_address: req.body.property_address,
        owner_id: req.body.owner_id
    })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router
const router = require('express').Router();
const {PolicyOwner, Homeowners, Auto} = require('../../models');

router.get('/', (req,res) =>{
    Homeowners.findAll({
        include:{
            model: PolicyOwner
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
        annual_premium: req.body.annual_premium,
        policy_number: req.body.policy_number,
        expiration_date: req.body.expiration_date,
        property_address: req.body.property_address,
        owner_id: req.body.owner_id
    })
    .then((dbHomeownerData) => res.json(dbHomeownerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.put('/:id', (req, res) => {
    Homeowners.update(req.body, {
        individualHooks: true,
        where:{ id: req.body.id}
    })
    .then((dbHomeownerData) => res.json(dbHomeownerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.get('/:id', (req, res) => {
    Homeowners.findOne({
        where:{
            id: req.params.id
        },
        include:{
            model: PolicyOwner
        }
    })
    .then(dbHomeownerData => {
        if (!dbHomeownerData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
          }
          res.json(dbHomeownerData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
})

router.delete('/:id', (req, res) => {
    Homeowners.destroy({
        where:{
            id: req.params.id
        },
    })
    .then(dbHomeownerData => {
        if (!dbHomeownerData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
          }
          res.json(dbHomeownerData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
})

module.exports = router
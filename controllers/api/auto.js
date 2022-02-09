const router = require('express').Router();
const {PolicyOwner, Homeowners, Auto} = require('../../models');

router.get('/', (req, res) => {
    Auto.findAll({
        include:{
            model: PolicyOwner
        }
    })
    .then(dbAutoData => res.json(dbAutoData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.post('/', (req, res) => {
    console.log('whats up')
    Auto.create({
        company_name: req.body.company_name,
        annual_premium: req.body.annual_premium,
        policy_number: req.body.policy_number,
        expiration_date: req.body.expiration_date,
        vehicle: req.body.vehicle,
        owner_id: req.body.owner_id
    })
    .then(dbAutoData => res.json(dbAutoData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.get('/:id', (res, req) => {
    Auto.findOne({
        where:{
            id: req.params.id
        },
        include:{
            model: PolicyOwner
        }
    })
    .then(dbAutoData => {
        if (!dbAutoData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
          }
          res.json(dbAutoData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
})

router.delete('/:id', (req, res) => {
    Auto.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(dbAutoData => {
        if (!dbAutoData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
          }
          res.json(dbAutoData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });

})

module.exports = router
const router = require('express').Router();
const {PolicyOwner, Policies, Homeowners, Auto} = require('../../models');

router.get('/', (req, res) => {
    PolicyOwner.findAll()
    .then(dbPolicyOwnerData => res.json(dbPolicyOwnerData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.post('/', (req, res) => {
    PolicyOwner.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;
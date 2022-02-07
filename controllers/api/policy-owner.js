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

router.get('/:id', (req, res) => {
  PolicyOwner.findOne({
    where:{
      id: req.params.id
  }
})
.then(dbPolicyOwnerData => {
  if (!dbPolicyOwnerData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    res.json(dbPolicyOwnerData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.delete('/:id', (req, res) => {
  PolicyOwner.destroy({
    where:{
      id: req.params.id
  }
})
.then(dbPolicyOwnerData => {
  if (!dbAutoData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    res.json(dbPolicyOwnerData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;
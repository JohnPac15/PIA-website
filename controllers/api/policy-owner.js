const router = require('express').Router();
const {PolicyOwner, Homeowners, Auto} = require('../../models');

router.get('/', (req, res) => {
    PolicyOwner.findAll({
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Homeowners
        },
        {
          model: Auto
        }
      ]
      
    })
    .then(dbPolicyOwnerData => res.json(dbPolicyOwnerData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})

router.get('/:username', (req, res) => {
  PolicyOwner.findOne({
    where:{
      username: req.session.username
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

router.post('/', (req, res) => {
  PolicyOwner.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    policy_owner: req.body.policy_owner,
    admin: req.body.admin
  })
  .then(dbPolicyOwnerData => res.json(dbPolicyOwnerData))
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

module.exports = router;
const router = require('express').Router();
const { adminRequired } = require('../../auth/_helpers');
const {User, Policies, Homeowners, Auto} = require('../../models');

router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
  })
  .then(dbPolicyOwnerData => res.json(dbPolicyOwnerData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.get('/policyowners', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    where: { policyOwner = true },
  })
  .then(dbPolicyOwnerData => res.json(dbPolicyOwnerData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.get('/admins', adminRequired, (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    where: { admin = true },
  })
  .then(dbPolicyOwnerData => res.json(dbPolicyOwnerData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.post('/', (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,    
    password: req.body.password
  })
  .then((dbUserData) => res.json(dbUserData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.put('/:username', adminRequired, (req, res) => {
  User.update(
    {
      admin: req.body.admin
    },
    {
    where: {
      username: req.params.username
      }
    })
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this username' });
      return;
  }
  res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});

module.exports = router;
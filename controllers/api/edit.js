const router = require('express').Router();
const {PolicyOwner, Homeowners, Auto} = require('../../models');

router.put('/:id', (req , res) => {
    console.log(req.session, 'what')
    PolicyOwner.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    .then(dbPolicyOwnerData => {
      res.json(dbPolicyOwnerData)
    })
  })

  module.exports = router
const router = require('express').Router();
const policyownerRoutes = require('./policy-owner.js');
const homeownersRoutes = require('./homeowner.js')
const autoRoutes = require('./auto.js')
const editRoutes = require('./edit.js')

router.use('/policyowner', policyownerRoutes);
router.use('/homeowners', homeownersRoutes);
router.use('/auto', autoRoutes)
router.use('/edit', editRoutes)

module.exports = router
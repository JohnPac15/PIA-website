const router = require('express').Router();
const policyownerRoutes = require('./policy-owner.js');
const homeownersRoutes = require('./homeowner.js')
const autoRoutes = require('./auto.js')

router.use('/policyowner', policyownerRoutes);
router.use('/homeowners', homeownersRoutes);
router.use('/auto', autoRoutes)

module.exports = router
const router = require('express').Router();
const policyownerRoutes = require('./policy-owner.js');
const homeownersRoutes = require('./homeowner.js')

router.use('/policyowner', policyownerRoutes);
router.use('/homeowners', homeownersRoutes);

module.exports = router
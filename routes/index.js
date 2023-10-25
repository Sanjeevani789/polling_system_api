const express = require('express');
const router = express.Router();

// api version 1.0
router.use('/api', require('./api/index'));


module.exports = router
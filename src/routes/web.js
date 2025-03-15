const express = require('express');
const { getHomepage, getABC, getIahsea } = require('../controllers/homeController')
const router = express.Router();


router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/iahsea', getIahsea)

module.exports = router;
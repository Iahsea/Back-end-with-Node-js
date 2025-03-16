const express = require('express');
const { getHomepage, getABC, getIahsea, postCreateUser } = require('../controllers/homeController')
const router = express.Router();


router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/iahsea', getIahsea)

router.post('/create-user', postCreateUser);

module.exports = router;
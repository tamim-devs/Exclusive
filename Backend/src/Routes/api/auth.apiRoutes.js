const express = require('express')
const _ = express.Router();
const {regestration} = require('../../controller/auth.controlla')

_.route('/regestration').post(regestration)

module.exports = _;
const express = require('express')
const _ = express.Router();
const {regestration,login} = require('../../controller/auth.controlla')

_.route('/regestration').post(regestration)
_.route('/login').post(login)

module.exports = _;
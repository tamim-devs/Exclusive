const express = require('express')
const _ = express.Router()
const authRoutes = require('./api/auth.apiRoutes')

_.use("/api/v1/auth", authRoutes)

module.exports = _
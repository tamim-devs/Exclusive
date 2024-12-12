const express = require('express')
const Server = express()
const allRoutes = require('../Routes/route.js')


Server.use(express.json())
Server.use(allRoutes)

module.exports = {Server}
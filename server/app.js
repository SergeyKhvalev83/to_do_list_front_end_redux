const express = require('express')
const serverConfig = require('./serverConfig/serverConfig');
const PORT = 3000
const app = express()

serverConfig(app)

const { sequelize } = require("./db/models");
sequelize.authenticate();



app.listen(PORT, ()=>{
  console.log(`SERVER LISTENING ON PORT ${PORT}`)
})
console.log()
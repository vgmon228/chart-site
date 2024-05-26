if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
  }
  
  const express = require('express')
  const app = express()
  
  const router = require('./routers')
  //const errorHandler = require('./middlewares/errorHandler')
  const cors = require("cors");
  
  app.use(cors());
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(router)
  //app.use(errorHandler)
  
  module.exports = app
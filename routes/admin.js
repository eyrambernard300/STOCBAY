const express = require('express');
const {adminController}= require('../controllers')

//server extension
const app = express.Router();

app.get('/', adminController.index)
app.get('/login', adminController.viewLogin)

module.exports = app
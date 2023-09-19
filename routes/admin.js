const express = require('express');
const {adminController}= require('../controllers')

//server extension
const app = express.Router();

app.get('/', adminController.index)

module.exports = app
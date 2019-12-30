const express = require('express');
const api = express.Router();

const auth = require('./auth');

api.get('/auth/allcustomers', auth.getAllCustomers);
api.post('/auth/login', auth.postLogin);

module.exports = api;

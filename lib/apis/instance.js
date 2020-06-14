const axios = require('axios');
const config = require('./config');

const token = config.token;

const instance = axios.create({
    baseURL: config.url,
    headers: {
        'Authorization': `Bearer ${token}`,
        'content-type': 'application/json'
    }

});

module.exports = instance;
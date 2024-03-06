require('dotenv').config();
const jwt = require('jsonwebtoken')

module.exports.createjwtToken =(payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, expiresIn = 24*60*60)
}
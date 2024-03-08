const jwt = require("jsonwebtoken");
require('dotenv').config()
const secret ="secret"

console.log(secret);
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.authtoken, secret,(err, payload) => {
        if (err) {
            res.status(401).json({verified: false});
        } else {
            next();
        }
    });
}
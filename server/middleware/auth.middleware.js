
const jwt = require("jsonwebtoken");
require('dotenv').config();
module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.authtoken, process.env.JWT_SECRET, async (err, decodedToken) => {
        const auth = await auth.findOne({ _id: decodedToken._id })
        if (err) {
            res.status(401).json({ verified: false, message: 'Please make sure you are signed in' });
        } else {
            req.role = auth.role;
            next();
        }
    });
}

// module.exports.checkpermission = (role) => {
//     return (req, res, next) => {
//         if (req.role !== role) {
//             const error = res.status(401).json({ verified: false, message: 'You are not authorised' });
//             next(error);
//         } else {
//             next();
//         }
//     }
// }

module.exports.checkpermission = (...role) => {
    return (req, res, next) => {
        if (!role.includes(req.role)) {
            const error = res.status(401).json({ verified: false, message: 'You are not authorised', status:'403 Forbidden' });
            next(error);
        } else {
            next();
        }
    }
}



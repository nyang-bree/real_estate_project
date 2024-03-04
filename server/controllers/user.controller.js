const User = require('../models/user.model');
module.exports.index = (req,res) => {
    res.json({
        message: "this is a message from the server"
    })
}
module.exports.createUser= (req, res) => {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
}

module.exports.getAllUser = (req, res) => {
    User.find({})
    .then((users) => {
        res.json(users)
    })
    .catch((err) =>{
        res.json(err)
    })
}
module.exports.getOneUser = (req, res) => {
    User.findOne({_id: req.params.id})
    .then((user) => {
        res.json(user)
    })
    .catch((err) => {
        res.json(err)
    });
   
}

module.exports.updateUser = (req,res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body,{new: true})
    .then((updatedUser) => {
        res.json(updatedUser)
    })
    .catch((err) => {
        res.json(err)
    })
}
 
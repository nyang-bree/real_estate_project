const Auth = require("../models/auth.model");
const bcrypt = require('bcrypt');
const { createjwtToken } = require("../utils/generate-jwt-token");
const jwt = require('jsonwebtoken')



module.exports.signup = (req, res) => {
    Auth.create(req.body)
    .then((auth) => {
        const authToken = jwt.sign({
            id: auth._id
        },process.env.JWT_SECRET);
        console.log(authToken);
        res.cookie("authtoken", authToken,{
            httpOnly: true
        }).status(201).json({msg: "user successfully created!", user: auth});
    })
    .catch((err) =>{
        res.status(400).json({msg: err.message});
    })
}

module.exports.signout = (req, res) => {
    res.clearCookie('authtoken');
    res.status(204).json({msg:'You have been locked out'});
}

module.exports.signin = async (req, res) => {
    const auth = await Auth.findOne({email: req.body.email});

    if(auth === null) {
        //email not found in users collection
        return res.sendStatus(400).json('invalid credentials');
    }

    const correctPassword = await bcrypt.compare(req.body.password.auth.password);
    if(!correctPassword) {
        return res.sendStatus(400);
    }

    // //if we made it this far the password was correct
    const authToken = jwt.sign({
        id:user._id
    }, process.env.SECRET_KEY);
    // const authToken = createjwtToken(auth._id)

    res.cookie("authtoken", authToken, {
            httpOnly: true
        })
        .json({msg: "Signin successful!"});

}

module.exports.getAllAuth = (req, res) =>{
    console.log('role from authenticate', req.role);
    User.find({})
    .then((auth) => {
        res.json({
            auth
        })
    })
    .catch((err) => {
        res.json(err)
    });
}

module.exports.getOneAuth = (req, res) =>{
    Auth.findOne({id: req.params.id})
    .then((auth) => {
        res.json({
            auth
        })
    })
    .catch((err) =>{
        res.json(err)
    })
}

module.exports.updateAuth = (req,res) => {
    Auth.findOneAndUpdate({_id: req.params.id}, req.body,{new: true})
    .then((updatedUser) => {
        res.json(updatedAuth)
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.deleteAuth = (req, res) => {
    Auth.deleteOne({_id: req.params.id})
    .then((results) => {
        res.json({
            results
        })
    })
    .catch((err) => {
        res.json(err)
    });
   
}

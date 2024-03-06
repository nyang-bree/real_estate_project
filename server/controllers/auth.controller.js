const Auth = require("../models/auth.model")

module.exports.signup = (req,res) => {
    Auth.create(req.body)
    .then((auth) => {
        res.status(201).json({
            message:'user successfully ctreates',
            user: auth
        });
    })
    .catch((err) =>{
        res.status(400).json(err);
    })
}

module.exports.signup = (req, res) =>{
    const auth = Auth.findOne({email:req.body.email});
    if(auth) {
        res.json({message:'email already in use'})
    }
    Auth.create(req.body)
    .then((auth) => { 
        const {_id, email, userName, password, createdAt, updatedAt} = auth;
        const resAuth = {userName, email, password, createdAt, updatedAt, _id}
        //creating the token
        const authToken = jwt.sign({
            id: auth._id
        }, process.env.SECRET_KEY);

        //setting the cookie and sending back the response
        res.cookie('authtoken', authToken, {httpOnly: true}).json({message:'success', auth:resAuth})

    })
    .catch((err) =>{
        console.log(err);
        res.status(400).json(err);
    })
}

module.exports.signin = async (req, res) => {
    const auth = await Auth.findOne({email: req.body.email});

    if(auth === null) {
        //email not found in users collection
        return res.sendStatus(400);
    }

    //if we made it this far the password was correct
    const authToken = jwt.sign({

    })
}
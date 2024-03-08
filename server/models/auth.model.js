const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: [true, 'User name is required']
    },
    email:{
        type: String,
        required:[true,"email is requred"]

    },
    password:{
        type: String,
        required:[true,"Password is required"],
        minlength:[8,"password must be 8 characters or longer"]
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'manager'],
        default: 'user'
    },
}, {timestamps: true});


const bcrypt = require('bcrypt')
AuthSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

// AuthSchema.virtual('confirmPassword')
// .get( () => this.confirmPassword)
// .set( value => this._confirmPassword = value);

// AuthSchema.pre('validate', function(next) {
//     if(this.password !== this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Password must match confirm password');
//     }
//     next();
// });

const Auth = mongoose.model('Auth', AuthSchema);
module.exports = Auth;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: {type: String, unique:true, required:[true,'Dish name is required']},
    email: {type: String, unique: false, required:[true,'Total minutes is required']},
    password: {type: String, required:[true,'Direction is required']},
}, {timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User;

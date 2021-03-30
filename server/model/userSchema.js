const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    AccountHeadName: {
        type:String,
        required:true
    },
    AccountType: {
        type:String
    }
});

const User = mongoose.model('Details',userSchema);

module.exports = User;
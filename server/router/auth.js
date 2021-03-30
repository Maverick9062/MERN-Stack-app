const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");


router.post('/' , async (req,res) => { 
    const {AccountHeadName, AccountType} = req.body;
    if(!AccountHeadName) {
        return (res.json({ error: "Plz fill the fiel properly"}));
    }


    try {
        const user = new User(req.body);
        const userRegister = await user.save();
        res.status(201).json({ message: "Form Submitted Successfully"});
    }
    catch 
    {
        res.status(400).send(err);
    }
        
})

module.exports = router;
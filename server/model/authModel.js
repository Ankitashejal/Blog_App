import express  from "express";
// import mongoose from "mongoose";

const mongoose = require('mongoose')

const authSchema =new mongoose.Schema({
    username:{
        type:String,
        // required:true mandatory field
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});

const Users = mongoose.model("Users", authSchema);
module.exports = Users;
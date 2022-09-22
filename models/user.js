import mongoose from "mongoose";
import db from '../db/conn.js';
import uniqueValidator  from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  
name:{
    type:String,
    required:[true,"name is required"],
    lowercase:true,
    unique:true,
    trim:true,
    },
email:{
    type:String,
    required:[true,"username is required"],
    unique:true,
    lowercase:true,
    trim:true
    },
password:{
    type:String,
    required:[true,"password is required"],
    unique:true,
    maxlength:10,
    minlength:5,
    trim:true,
    },
    
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User',userSchema)
    
export default User
import mongoose from "mongoose";
import db from '../db/conn.js';

const authSchema = new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId, 

    name:String,
    email:String,
    password:String,
    // status:Number,
    // type:String
})

const Auth = mongoose.model('Auth',authSchema)

export default Auth;
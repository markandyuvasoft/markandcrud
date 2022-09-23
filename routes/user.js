import express from 'express'
import * as path from 'path'
import bcrypt from 'bcrypt'
import  Jwt  from 'jsonwebtoken'
import checkAuth from '../middleware/check-auth.js'
import User from '../models/user.js'
import mongoose from 'mongoose'

const userrouter=express.Router()


// USER DETAILS POST START..................................................................................................
userrouter.post("/post",(req,res,next)=>{

    const user = new User(req.body)
  
    user.save().then(()=>{

    res.status(201).send(user)

    }).catch((err)=>{
  
    res.status(400).send(err)

    }) 
  })
// USER DETAILS POST END..................................................................................................


// USER DETAILS GET END..................................................................................................
userrouter.get("/get",async(req,res)=>{

    try{

    const get= await User.find()

    res.status(201).send(get)
    }
    catch(err)
    {
    res.status(400).send(err)
    }
})
// USER DETAILS GET END..................................................................................................


//USER UPDATE METHOD START...............................................................................................
userrouter.put("/update/:id",checkAuth, async (req,res)=>{
    try{
    
    const _id= req.params.id;
    
    const update= await User.findByIdAndUpdate(_id, req.body)
    
    res.send(update)
    
    }catch(err){
    
    res.status(400).send(err)
    }
    })
//USER UPDATE METHOD END...............................................................................................
  

//USER DELETE METHOD START...............................................................................................
userrouter.delete("/delete/:id",checkAuth,async(req,res)=>{

    try{
        const _id= req.params.id

        const del= await User.findByIdAndDelete(_id)

        res.status(201).send(del)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})
//USER DELETE METHOD START...............................................................................................


export default userrouter;
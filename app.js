import express from 'express'
import dotenv from 'dotenv'
import userrouter from './routes/user.js'
import authrouter from './routes/auth.js'
import cors from "cors";
import mongoose from 'mongoose'


dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.use("/",userrouter)
app.use("/",authrouter)


mongoose.connect(
    process.env.MONGO_URL,

{useNewUrlParser:true}

)

.then(() => {

    console.log("connect to mongodb");

}).catch(error =>{

    console.log("something wroung");
})



app.listen(PORT, () => {

    console.log("server start at port", PORT);
})
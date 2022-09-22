// import express from 'express'
// import * as path from 'path'
// import bodyParser from 'body-parser'
// import userrouter from './routes/user.js'
// import authrouter from './routes/auth.js'
// import cors from "cors";

// const port =process.env.PORT || 8000

// const app=express()

// app.use(express.json())

// app.use(cors())


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))


// app.use("/",userrouter)
// app.use("/",authrouter)


// app.listen(port, () => {

//     console.log(`listing to posrt no at ${port}`);

//     })

import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

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
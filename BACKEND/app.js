
import express  from 'express';
import { nanoid } from 'nanoid';
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import short_url from "./src/routes/short_url.route.js"
import user_routes from "./src/routes/user.routes.js"
import auth_routes from "./src/routes/auth.routes.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors  from "cors"
import cookieParser from "cookie-parser"
import { attachUser } from './src/utils/attachUser.js';

dotenv.config("./.env")

const app=express(); //express lo listen krega
// app.use(cors());
app.use(cors({
  origin: 'https://shrink-x-short.vercel.app', // frontend origin
  credentials: true, // allow cookies or authorization headers
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
 app.use(cookieParser())
app.use(attachUser)

//short url ki api create krna shikhe
//app.use("/api/create",short_url)
app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/short",short_url)

//redirect krna short_url se chrome tk
app.get("/:id",redirectFromShortUrl)

app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false,
    })
})



// use for handling error in whole system
app.use(errorHandler)

app.listen(8000,()=>{
    connectDB();
    console.log("server is running at port 8000");
    
})

//create routes
//GET
//POST

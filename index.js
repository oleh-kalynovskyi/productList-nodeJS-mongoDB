import express from "express";
import mongoose from "mongoose";
import router from './router.js';
import cors from 'cors';

const DB_URL='mongodb+srv://user:user@cluster0.ofxvo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router) 

async function startApp() {
    try {
        await mongoose.connect( process.env.DB_URL || DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen( process.env.PORT  || 5000, console.log('Server work') )
    } catch (error) {
        console.log(error);
    }
}

startApp()

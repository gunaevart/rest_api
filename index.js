const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.SERVER_PORT
const userRouter = require('./routes/userRouter.js');

const conn = process.env.CONN

const app = express()

app.use(express.json())
app.use('/auth', userRouter)
const start  = async () => {
    try {
        await mongoose.connect(conn)
        app.listen(PORT, () => {

            console.log('Running server start!!!!');
        })
    }
    catch (e) {
        console.log(e);
    }
}

start()

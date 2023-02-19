const express = require('express');
const dotenv = require('dotenv').config();
const studentsRouter = require('./routes/students');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL
app.use(express.json())


app.use('/students', studentsRouter)

mongoose.connect( DATABASE_URL, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
     }, () => {
        console.log("Database connected")
    })


app.listen( PORT , () => console.log("Server Started"))
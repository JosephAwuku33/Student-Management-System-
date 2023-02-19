const express = require('express');
const dotenv = require('dotenv').config();
const studentsRouter = require('./routes/students');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL
app.use(express.json())


app.use('/students', studentsRouter)

mongoose.set('strictQuery', true )

async function DBCONNECT(){
    try {
        await mongoose.connect( DATABASE_URL, 
            { 
                autoIndex:true,
                
             }, () => {
                console.log("Database connected")
            })
    } catch (err){
        console.log(err)
    }
}


app.listen( PORT , async () => {
    try{
        await DBCONNECT();
        console.log("Server started")
    } catch (err){
        console.log(err)
    }
})
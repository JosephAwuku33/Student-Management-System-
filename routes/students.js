const express = require('express')
const router = express.Router()
const Student = require('../models/Student')

//Getting all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    }
    catch(err){
        res.status(500).json( {message: err.message })
    }
})



//Creating one new student
router.post('/', async (req, res) => {
    const student = new Student({
        fullName: req.body.fullName,
        student_ID: req.body.student_ID,
        programme: req.body.programme,
        residence: req.body.residence,
    }) 
    try {
        const newStudent = await student.save()
        res.status(201).json(newStudent)
    } catch(err){
        res.status(400).json({message: err.message})
   }
})

module.exports = router
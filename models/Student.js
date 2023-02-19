const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
   fullName: {
    type: String,
    required: true
   },

   student_ID: {
    type: Number,
    required: true
   },

   programme: {
    type: String,
    required: true
   },

   residence: {
    type: String,
    required: true 
   }

})

module.exports = mongoose.model('Student', StudentSchema);
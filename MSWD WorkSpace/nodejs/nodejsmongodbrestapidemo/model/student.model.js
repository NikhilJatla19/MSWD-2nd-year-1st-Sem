const mongoose = require('mongoose')

const Schema = mongoose.Schema

let studentSchema = new Schema({
    id:{
        type: Number
    },

    name:{
        type: String
    },

    email:{
        type: String
    },

    gender:{
        type: String
    },

    dob:{
        type: String
    },
    location:{
        type: String
    }
    },
    {
    collection: 'students'
})

//collection name - students

module.exports =mongoose.model('StudentSchema',studentSchema)

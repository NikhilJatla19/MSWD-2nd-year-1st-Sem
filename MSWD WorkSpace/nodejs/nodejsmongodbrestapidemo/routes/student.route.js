const { response } = require('express');
const express = require('express')

const app = express();

const studentExpressRoute = express.Router()

//Student Schema

let StudentSchema = require("../model/student.model")

//Create or Add Student (Insert Operation)

studentExpressRoute.route('/add').post((req,rest,next) =>
{
    StudentSchema.create(req.body,(error,data) =>
    {
        if(error)
        {
            return next(error) //instead of next(), you can you throw
        }
        else
        {
            res.json(data) //data is added to response object in the form of JSON
        }
    })
})

//Display Students (Select Operation or Retreive Operation)

studentExpressRoute.route('/display').get((req,res) =>
{
    StudentSchema.find((error,data) =>
    {
       if(error)
       {
           return next(error)
       }
       else
       {
           res.json(data)
       }
    })
})

//Displaying a Specific Student Record by ID

studentExpressRoute.route("/getstudent/:id").get((req,res) =>
{
    StudentSchema.findById(req.params.id,(error,data) =>
    {
        if(error)
        {
            return next(error)
        }
        else
        {
            res.json(data)
        }
    })
})

//Update Student (Update Operation)

studentExpressRoute.route("/update/:id").put((req,res,next) =>
{
    StudentSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>
    {
        if(error)
        {
            return next(error)
        }
        else
        {
            res.json(data)
            console.log("Student Document Updated Successfully")
        }
    })
})

// Deleting Student Document by ID (Delete Operation)

studentExpressRoute.route("/delete/:id").delete((req,res,next) =>
{
    StudentSchema.findByIdAndRemove(req.params.id,(error,data) =>
    {
        if(error)
        {
            return next(error)
        }
        else
        {
            res.status(200).json(
                {
                    msg:data
            })
        }
    })
})
module.exports=studentExpressRoute
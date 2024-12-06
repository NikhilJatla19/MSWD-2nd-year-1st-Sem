// Inserting documents into collection

var MongoClient = require("mongodb").MongoClient

const url = "mongodb://localhost:27017/empdemo" // server path

// empdemo - database name
// db - database object

MongoClient.connect(url,function(err,client)
{
    // using client object, create db object
    var db = client.db("empdemo") // empdemo - database name
    // Employee - collection name
    var collection = db.collection("Employee")
    var data = [{empid:103,empname:"SURYA",gender:"MALE",department:"CSE"},{empid:104,empname:"Pavan",gender:"FEMALE",department:"ECE"}]
    collection.insertMany(data,(err,result) =>
    {
        if(err) console.log(err)
        console.log("Documents Inserted successfully")
    })
})
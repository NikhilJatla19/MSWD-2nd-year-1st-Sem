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
    var condition = {empi:104}
    var newvalues = { $set : {emplname:"Pavan KLU",gender:"Male"}  }

    collection.updateMany(condition,newvalues,function(err,result)
    {
        if(err) console.log(err)

        else
        {   
            console.log("Documents Updated successfully")
            console.log(result)
        }
    })
})
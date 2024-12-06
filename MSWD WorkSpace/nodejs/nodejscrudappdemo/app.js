//Connecting to mongoDB Database
var MongoClient = require("mongodb").MongoClient

const url = "mongodb://localhost:27017/empdemo" //server path
//empdemo - database name
//db - database object
MongoClient.connect(url,function(err,db)
{
    if(!err) //if there is no error
    {
        console.log("Connection Established Successfully")
    }
    else
    {
        console.log("Error in Connection")
    }
})
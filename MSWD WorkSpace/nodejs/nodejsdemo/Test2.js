var express = require('express')
var app = express()

app.get('/display',function(req,res)
{
    res.send("<b>Displaying Data</b>")
})

app.post('/create',function(req,res)
{
    res.send("Creating Data")
})

app.put('/update',function(req,res)
{
    res.send("Updating Data")
})

app.delete('/delete',function(req,res)
{
    res.send("deleting Data")
})

var server = app.listen(2020,function(){
    console.log("Server is Running")
})
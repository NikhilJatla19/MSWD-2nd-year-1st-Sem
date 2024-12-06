var express=require('express')

var app=express() //here app is an instance of type express

app.get('/',function(req,res)
{
    res.send("Hello Express JS")
})

app.get('/demo',function(req,res)
{
    res.send("Hello Demo USER")
})

app.get('/klu',function(req,res)
{
    res.send("Hello KLU")
})
var server=app.listen(1141,function() {})

//callback - passing function body as an argument
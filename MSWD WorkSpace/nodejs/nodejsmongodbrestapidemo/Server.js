let express = require('express')
let path = require('path')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let cors = require('cors')
let dbConfig = require('./db/database')

// cors module will provide Connect/Express

// Connecting to mongoDB
mongoose.connect(dbConfig.db,{
    useNewUrlParser : true
}).then(() => {
    console.log("Connected to Database")
},
error => {
    console.log("Connection Failed:"+error)
})

// Settting up express

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : false
}))
app.use(cors())
const studentRoute = require("./routes/student.route")
app.use("/student",studentRoute) //where /student is end point
const port=2020
const server = app.listen(port, () => {
    console.log("Port Connected to : "+port)
})

// HTTP Status code - 404 - Not Found
app.use((req,res,next) => {
    next(createError(404))
})
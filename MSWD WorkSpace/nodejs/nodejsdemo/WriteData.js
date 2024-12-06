var fs = require('fs') //fs-file system

var data="MEAN STACK WEB DEVELOPEMENT"

fs.writeFile("demo.text",data,(err)=> {
    if(err)
    {
        console.log(err)
    }
    console.log("Success .... !|")
}

)
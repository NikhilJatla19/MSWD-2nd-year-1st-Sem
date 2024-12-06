var fs=require('fs')
//utf-8 ==>encoding System will except more than 1lack characters
//ASCII ==> 0 to 255 characters (single byte processing)

fs.readFile("demo.text","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    console.log(data)
}

)
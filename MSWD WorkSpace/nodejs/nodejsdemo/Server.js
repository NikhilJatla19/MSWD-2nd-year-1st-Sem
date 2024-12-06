var http = require('http') //Hyper Text Transfer Protocol

//require method is used to import pre defined/user defined modules(custom) modules
//req - request res-response
//clint will send the request to the server and server will send the response to the client(output)
//Client will make a request to the server using (URL- uniform resorce locator)
http.createServer(function(req,res)
{
    res.write("Hello MSWD S9,we are going to kill Node JS")
    res.end()
}).listen(1141)//1141 - port number
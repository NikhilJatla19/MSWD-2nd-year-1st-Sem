var http = require('http') //Hyper Text Transfer Protocol

http.createServer(function(req,res)
{
    res.write("<html>")
    res.write("<head>")
    res.write("<title>nodejs</title>")
    res.write("<body>")
    res.write("<b>Hello MSWD S9,we are going to kill Node JS</b><br>")
    res.write("<font color='red'>MSWD S9 Section</font><br>")
    res.write("<mark>MEAN STACK WEB DEVELOPEMENT</mark><br>")
    res.write("</body>")
    res.write("</html>")
    res.end()
}).listen(1141)//1141 - port number
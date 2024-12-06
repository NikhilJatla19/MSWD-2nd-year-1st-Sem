//sending mail using nodejs
var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport(
    {
        service : "gmail",
        auth : //authentication -login credentials
        {
            user: "pubg.gamer1141@gmail.com",
            pass: "Lalith@19"
        }
    }
)
//mailoptions is an user defined variable
var mailOptions =
{
    from : "pubg.gamer1141@gmail.com",
    to : "nikhil.jatla19@gmail.com,game.keeper1141@gmail.com",
    subject : "Sending Email Message Using nodemailer",
    //text : "Hello Nikhil, Good Morning"
    html:"<font color=red>Hello</font>"
}
//nodemailer.com/transporter/sendmail/
//info argument contains 2 properties

//info.envlop ==>from address and to address
//info.messageid

transporter.sendMail(mailOptions,function(error,info)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("Email Sent Successfully");
    }
})
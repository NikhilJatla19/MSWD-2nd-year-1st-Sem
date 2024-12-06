import React, { useState } from 'react';

export default function Demo_Form()
{
    const[fullname,setfullname] = useState("")
    const[dob,setdob]= useState("")

    function display()
    {
        //alert(fullname+","+dob)
        document.getElementById("fname").innerHTML = fullname
        document.getElementById("dob").innerHTML = dob
    }

    return <div>
        <input type="text" placeholder="Enter Full Name" value={fullname} onChange={(e) =>{setfullname(e.target.value)} }/> <br/><br/>
        <input type="date" value={dob} onChange={(e) =>{setdob(e.target.value)} }/> <br/><br/>

        <button onClick={display}>Display</button> <br/>
        Full Name: <font id="fname" color="blue"></font>
        Date Of Birth: <p id="dob"></p>
    </div>
}
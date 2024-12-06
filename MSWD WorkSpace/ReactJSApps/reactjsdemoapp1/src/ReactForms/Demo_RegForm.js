import React, { useState } from 'react';

export default function Demo_RegForm()
{
    const[firstname,setfirstname] = useState("")
    const[lastname,setlastname] = useState("")
    const[gender,setgender] = useState("")
    const[age,setage]= useState("")
    
    function displayvalues(event)
    {
        
        var user ={
            fname:firstname,
            lname:lastname,
            gen:gender,
            age:age
        }
        console.log(user)
    }

    return <div>
        <form onSubmit={displayvalues}>
            <input type="text" placeholder="Enter First Name" value={firstname} onChange={(e) =>{setfirstname(e.target.value)} }/> <br/><br/>
            <input type="text" placeholder="Enter Last Name" value={lastname} onChange={(e) =>{setlastname(e.target.value)} }/> <br/><br/>
            <input type="radio" required value="male" name="gender" onClick={(e) =>{setgender(e.target.value)} }/>Male <input type="radio" value="female" name="gender" onClick={(e) =>{setgender(e.target.value)} }/>Female <br/><br/>
            <input type="number" placeholder="Enter Age" value={age} onChange={(e) =>{setage(e.target.value)} }/> <br/><br/>
            <input type="submit" value="Register"/> <input type="Reset" value="Clear"/>
        </form>
    </div>
}
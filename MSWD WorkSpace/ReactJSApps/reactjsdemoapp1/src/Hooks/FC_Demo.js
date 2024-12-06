import React, {useState, useEffect} from 'react'

export default function FC_Demo()
{
    const[name,setName] = useState('KLU')
    const[department,setDept] = useState('CSE')

    useEffect( () =>{
        setDept('Computer Science Engineering')
    },[department] //-empty Array
    )
    //(callback,dependencies)
    //React Refs -how to get new values  and old values

    function buttondemo()
    {
        //alert("Change Name MEthod")
        setName('K L University');
        //setName(prompt("Enter Name"));
    }

    return <div>
        <h1><u>React Hooks</u></h1>
        <h2>Name:{name}</h2>
        <button onClick={buttondemo}>Change Name</button>
        <h2>Department:{department}</h2>
    </div>
} 


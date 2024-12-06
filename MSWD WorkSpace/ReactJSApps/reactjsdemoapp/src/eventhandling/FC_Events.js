import React from 'react'

function FC_Events()
{
    function buttondemo()
    {
        alert("Button Clicked ...!")
    }

    function inputtextdemo()
    {
        alert("On Change Event ... !")
    }

    return <div>
        <h1><u>Event Handling in Functional Component</u></h1>
        <button onClick={buttondemo}>Click Here</button><br/><br/>
        <input type="text" name="username" placeholder="Enter Username" onChange={inputtextdemo}/>
    </div>
}

export default FC_Events
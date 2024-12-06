import React, {Component} from 'react'

class CC_Events extends React.Component
{
    buttondemo=()=>
    {
        alert("Button Clicked ... !")
    }
    inputtextdemo=()=>
    {
        alert("onChange Event ... !")
    }
    keyupdemo=()=>
    {
        alert("onKeyUP Event ... !")
    }
    keydowndemo=()=>
    {
        alert("onKeyDown Event ... !")
    }
    mouseOverdemo=()=>
    {
        alert("onMouseOver Event ... !")
    }
    mouseoutdemo=()=>
    {
        alert("OnMouseOut Event ... !")
    }

    render()
    {
        return <div>
            <h1><u>Event Handling in Class Component</u></h1>
            <button onClick={this.buttondemo}>Click Here</button><br/><br/>
            <input type="text" name="username" placeholder="Enter Username" onChange={this.inputtextdemo}/><br/><br/>
            <input type="text" name="location" placeholder="Enter Location" onKeyUp={this.keyupdemo}/><br/><br/>
            <input type="text" name="Collage" placeholder="Enter Collage" onKeyDown={this.keydowndemo}/><br/><br/>
            <h2 onMouseOver={this.mouseOverdemo} onMouseOut={this.mouseoutdemo}>OnMouseHover and On MouseOut Event</h2>
        </div>
    }
}

export default CC_Events
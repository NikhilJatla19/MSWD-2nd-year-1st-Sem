import React, {Component} from 'react'

class CC_State extends Component
{
    constructor()
    {
        super()
        this.state =
        {
            "name" : "Nikhil",
            "department" : "CSE",
            "Id" : 1141
        }
    }

    render()
    {
        return <div>
            <h1>Class Components (CC_state.js)</h1>
            <h2>ID={this.state.Id}</h2>
            <h2>Name={this.state.name}</h2>
            <h2>Department={this.state.department}</h2>
        </div>
    }
}
export default CC_State
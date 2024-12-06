import React, {Component} from 'react' 
import Props_Child_Class from "./Props_Child_Class"

class Props_Parent_Class extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return <div>
            <h1>Props Parent Class Component</h1>
            <h1>Displaying Props From App.js</h1>
            <h2>Gender : {this.props.gender}</h2>
            <h2>Data Of Birth : {this.props.dob}</h2>
            <h2>Age : {this.props.age}</h2>
            <img src='klulogo3.png'/>
            <Props_Child_Class id="1141" name="Nikhil" department="CSE"/>
        </div>
    }
}

export default Props_Parent_Class
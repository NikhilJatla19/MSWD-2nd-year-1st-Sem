import React from 'react'
import Props_Child_Functional from './Props_Child_functional'

function Props_Parent_Functional(props)
{
    return <div>
        <h1>Props Parent Functional Component</h1>
        <h1>Displaying Props from App.js</h1>
        <h2>Gender :{props.gender}</h2>
        <h2>Date Of Birth :{props.dob}</h2>
        <h2>Age :{props.age}</h2>
        <Props_Child_Functional id="1141" name="Nikhil" department="CSE"/>
    </div>
}

export default Props_Parent_Functional
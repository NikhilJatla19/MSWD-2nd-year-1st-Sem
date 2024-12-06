import React from 'react'

function Props_Child_Functional(props)
{
    return <div>
        <h1>Props Child Functional Component</h1>
        <h1>Displaying Props From Props_Parent_Functional.js</h1>
        <h2>ID : {props.id}</h2>
        <h2>Name : {props.name}</h2>
        <h2>Department : {props.department}</h2>
    </div>
}

export default Props_Child_Functional
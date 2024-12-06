import React from 'react'

const Demo2_Functional1 = props=>
{
    const{id,name,salary}= props
    return <div>
        <h2>ID: {id}</h2>
        <h2>Name: {name}</h2>
        <h2>Salary: {salary}</h2>
    </div>
}

export default Demo2_Functional1

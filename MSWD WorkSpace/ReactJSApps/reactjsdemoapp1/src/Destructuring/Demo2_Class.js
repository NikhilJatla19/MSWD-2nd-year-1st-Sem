import React,{Component} from 'react'

class Demo2_Class extends Component
{
    render()
    {
        const{id,name,salary}=this.props
        return <div>
            <h2>ID: {id}</h2>
            <h2>Name: {name}</h2>
            <h2>Salary: {salary}</h2>
        </div>
    }
}

export default Demo2_Class;
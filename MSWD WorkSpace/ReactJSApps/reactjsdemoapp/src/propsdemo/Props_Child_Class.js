import React, {Component} from 'react' 

class Props_Child_Class extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return <div>
            <h1>Props Child Class Component</h1>
            <h2>Id : {this.props.id}</h2>
            <h2>Name : {this.props.name}</h2>
            <h2>Department : {this.props.department}</h2>
        </div>
    }
}

export default Props_Child_Class
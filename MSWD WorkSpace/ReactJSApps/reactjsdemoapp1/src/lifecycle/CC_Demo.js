import React,{Component} from 'react';

class CC_Demo extends Component
{
    constructor()
    {
        //alert("In Constructor Method");
        super();
        this.state={number:0} //number -key and 0-value
    }

    componentWillMount()
    {
        //alert("Before Component is going to render")
        this.setState({number:1})
    }

    componentDidMount()
    {
        alert("After Component is rendered");
    }

    render()
    {
        return <div>
            <h1><u>Demo On Life Cycle Methods</u></h1>
        <h2>Number: {this.state.number}</h2>
        </div>
    }
}
export default CC_Demo;
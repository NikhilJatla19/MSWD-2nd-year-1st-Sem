import React,{Component} from 'react'
import Demo2_Class from './Demo2_Class';

class Demo1_Class extends Component
{
    render()
    {
        return <div>
        <h1>Destructuring Using Class Component</h1>
        <Demo2_Class id="30384" name="Nikhil" salary="1000000"/>
        </div>
    }
}

export default Demo1_Class;
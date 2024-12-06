import React, {Component} from 'react'
import './counter.css'

class Counter extends React.Component
{
    constructor()
    {
        super()
        this.state =
        {
            number:0,
            //number1:0
        }
    }
    increment=()=>
    {
        //alert("Increment Function")
        this.setState({number:this.state.number+1/*,number:this.state.number1*/})
    }
    decrement=()=>
    {
        //alert("Decrement Function")
        this.setState({number:this.state.number-1})
    }


    render()
    {
        return <div>
            <center>
            <h1 align="center"><u>Counter App</u></h1><br/>

            Count:{this.state.number}<br/><br/>

            <button onClick={this.increment}>Increment</button>
            <button  onClick={this.decrement}>Decrement</button>
            </center>
        </div>
    }
}

export default Counter
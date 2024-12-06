import React, {Component} from 'react'
import './Skill2.css'

class Skill2 extends React.Component
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

            <button onClick={this.increment} style={{backgroundColor:'green'}}>Increment</button>
            <button  onClick={this.decrement} style={{backgroundColor:'red'}}>Decrement</button>
            </center>
        </div>
    }
}

export default Skill2
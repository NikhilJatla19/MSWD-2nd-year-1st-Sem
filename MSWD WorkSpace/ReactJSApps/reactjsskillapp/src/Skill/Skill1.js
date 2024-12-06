import React, {Component} from 'react'
import './Skill1.css'
import user from './user.jpg'
class Skill1 extends React.Component
{
    render()
    {
        return <div className='ID'>
            <center>
                <h1><u>ID Card</u></h1>
                <img src={user} width="100" height="100"/>
                <h3>Jatla Nikhil Sai Lalith</h3>
                <h3>Front End Enthusiast</h3>
                <h3>2000030384</h3>
                <h3>CSE Dept</h3>
                <h3>KL University</h3>
            </center>
        </div>
    }
}

export default Skill1
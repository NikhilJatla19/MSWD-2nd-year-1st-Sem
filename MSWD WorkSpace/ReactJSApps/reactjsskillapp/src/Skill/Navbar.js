import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar()
{
    return <div>
        <h1 style={{color:'blue'}}>Ts MSWD Skilling</h1>
        <ul>
            <Link to="/Home">
            <li>Home</li>
            </Link>

            <Link to="/Skill1">
            <li>Skill1</li>
            </Link>

            <Link to="/Skill2">
            <li>Skill2</li>
            </Link>

        </ul>
    </div>
}
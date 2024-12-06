import React from 'react'
import './routing.css'
import { Link } from 'react-router-dom';
//install 3rd party package for routing --> npm install react-router-dom
export default function Navbar()
{
    return <div>
        <h2>This Is NavBar Component</h2>
        <ul>
            <Link to="/home">
            <li>Home</li>
            </Link>

            <Link to="/aboutus">
            <li>AboutUs</li>
            </Link>

            <Link to="/services">
            <li>Services</li>
            </Link>

            <Link to="contactus">
            <li>ContactUS</li>
            </Link>
        </ul>
    </div>
}
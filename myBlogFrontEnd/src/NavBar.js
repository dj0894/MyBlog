import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <nav>
            <ul className="navbar-class">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/articlesListPage">Articles</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
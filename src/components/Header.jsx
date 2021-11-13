import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/formulario">Formulario</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/carousel">Carousel</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header

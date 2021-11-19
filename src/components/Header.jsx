import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <ul className="list-group list-group-horizontal justify-content-center mt-4">
                <li className="list-group-item list-group-item-dark mb-3">
                    <Link className="list-group-item-action" style={{textDecoration: 'none'}} to="/formulario">Formulario</Link>
                </li>
                <li className="list-group-item list-group-item-dark mb-3">
                <Link className="list-group-item-action" style={{textDecoration: 'none'}} to="/login">Login</Link>
                </li>
                <li className="list-group-item list-group-item-dark mb-3">
                <Link className="list-group-item-action" style={{textDecoration: 'none'}} to="/carousel">Carousel</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header

import React from 'react'
import '../components/NavBar.css';

function NavBar(){
    return (
        <nav className="navbar">
            <div className="nav-links">
            <a href="/home" className="nav-link">Home</a>
            <a href="/ponuda" className="nav-link">Ponuda</a>
            <a href="/kontakt" className="nav-link">Kontakt</a>

            </div>
        </nav>
    );
}

export default NavBar;
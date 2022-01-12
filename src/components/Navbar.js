import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton)
    return (
        <>
        
        <nav className="Navbar">
            <div className="navbar-container">
                <Link to="/Amana" className="navbar-logo" onClick={closeMobileMenu}>
                    Amana Assosiation
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/Amana" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
                            About us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/takim" className="nav-links" onClick={closeMobileMenu}>
                            Sponsors
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/galeri" className="nav-links" onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                        <div className="submenu">
                            <ul>
                                <li>orphan support</li>
                                <li>quran memorization</li>
                                <li>mosquees</li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/duyuru" className="nav-links" onClick={closeMobileMenu}>
                            Donate
                        </Link>
                    </li>
                    
                </ul>
                
            </div>
        </nav>
        </>
    )
}

export default Navbar

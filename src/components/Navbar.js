import React, {useState, useEffect} from 'react'
//import { Link } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton)
    return (
        <>
        
        <nav className="Navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Amana Assosiation
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
                            About us
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/galeri" className="desktop-link" onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                        <input type="checkbox" id="show-features"/>
            <label for="show-features">Gallery<i class='fa fa-angle-double-down' /></label>
                        <div className="submenu">
                            <ul>
                                
                                <li><Link to="/galeri#qu-me" className="sub-links" onClick={closeMobileMenu}>
                                Iftar Programs
                        </Link></li>
                                
                                <li><Link to="/galeri/#or-su" className="sub-links" onClick={closeMobileMenu}>
                                Udhiya Programs
                        </Link></li>
                                
                                <li><Link to="/galeri#mo" className="sub-links" onClick={closeMobileMenu}>
                                Mosquees
                        </Link></li>
                                
                            </ul>
                        </div>
                    </li>
                    
                    
                </ul>
                
            </div>
        </nav>
        </>
    )
}

export default Navbar

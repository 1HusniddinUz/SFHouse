import { useState } from "react";
import "../../assets/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo */}
                <div className="logo_box">
                    <h1>SABAH FASHION HOUSE</h1>
                </div>

                {/* Desktop Links */}
                <div className="nav_links">
                    <ul>
                        <li><a href="#Header">Home</a></li>
                        <li><a href="#Products">Products</a></li>
                        <li><a href="#Footer">Contact</a></li>
                    </ul>
                </div>

                {/* Lang Provider */}
                <div className="lang_provider">
                    <select>
                        <option value="en">EN</option>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select>
                </div>

                {/* Burger Icon */}
                <div
                    className={`burger ${isOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile_menu ${isOpen ? "show" : ""}`}>
                <ul>
                    <li><a href="#Header" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#Products" onClick={toggleMenu}>Products</a></li>
                    <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
                <div className="mobile_lang">
                    <select>
                        <option value="en">🇬🇧 English</option>
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="uz">🇺🇿 O‘zbekcha</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

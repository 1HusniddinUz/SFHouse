import "../../assets/Footer.css";
import { MapPin, Phone, Mail, User } from "lucide-react";
import logo from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <footer id="Footer">
            <div className="footer-container">

                {/* Menejer va Rahbar ma'lumotlari */}
                <div className="manager-info">
                    <h2>Contact Manager</h2>
                    <ul>
                        <li><User size={18} /> <span>SAYITOVA BARCHINOY</span></li>
                        <li><Phone s

                                   ize={18} /> <a href="tel:+998936882718">+998 93 688 27 18</a></li>
                        <li><Mail size={18} /> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sayitovabarchinoy87@gmail.com&body=Assalomu%20alaykum" target="_blank" rel="norefferrer">sayitovabarchinoy87@gmail.com</a></li>
                    </ul>
                </div>

                {/* Logo va location */}
                <div className="company-info">
                    <div className="logo-box">
                        <img src={logo} alt="Logo" />
                        <p>SABAH FASHION HOUSE</p>
                    </div>
                    <div className="map-box">
                        <h3><MapPin size={18} /> Our Location</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6137.322320365247!2d64.534323!3d39.724797!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQzJzI5LjMiTiA2NMKwMzInMDMuNiJF!5e0!3m2!1sru!2s!4v1759204750062!5m2!1sru!2s"
                            width="100%"
                            height="220"
                            style={{ border: 0, borderRadius: "12px" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Pastki qism */}
            <div className="footer-bottom">
                <p>© 2025 SABAH FASHION HOUSE. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

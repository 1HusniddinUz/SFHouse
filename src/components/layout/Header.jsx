import Navbar from "../ui/Navbar.jsx";
import HeroSection from "../HeroSection/HeroSection.jsx";
import Social_links from "../ui/Social_links.jsx";
const Header  = () => {
    return (
        <header id="Header">
            <Navbar />
            <HeroSection />
            <Social_links />
        </header>
    )
}
export default Header
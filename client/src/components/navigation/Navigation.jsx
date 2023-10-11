import { useEffect, useState } from "react";
import "./navigation.css";
import imgLogo from "../../assets/Notes.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track scrolling
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check the scroll position to determine if the background should change
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <nav id="navbar" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <img src={imgLogo} alt="logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#hero" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#faq" className="nav-link">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-buttons">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navigation;

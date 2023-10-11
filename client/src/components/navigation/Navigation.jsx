import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navigation.css";
import imgLogo from "../../assets/Notes.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
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
          <a href="/#hero" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/#services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="/#faq" className="nav-link">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="/#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-buttons">
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

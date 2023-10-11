import "./contact.css";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">
        If you have any questions or need to get in touch with us, feel free to
        reach out:
      </p>
      <p className="contact-email">
        Email: <a href="mailto:your.email@example.com">email@example.com</a>
      </p>
      <div className="social-media">
        <p className="social-media-text">Connect with us on social media:</p>
        <a href="https://www.facebook.com" className="social-link">
          <AiFillFacebook />
        </a>
        <a href="https://twitter.com" className="social-link">
          <AiFillTwitterCircle />
        </a>
        <a href="https://www.instagram.com" className="social-link">
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;

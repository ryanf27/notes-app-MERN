import "./Hero.css";
import heroImg from "../../assets/heroImg.png";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Elevate Your Productivity with Our Notes App
        </h1>
        <p className="hero-subtitle">
          Effortlessly organize, create, and manage your notes.
        </p>
        <button className="hero-button">Get Started</button>
      </div>

      <div className="image">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;

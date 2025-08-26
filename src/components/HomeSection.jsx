import "../assets/../home/home.style.css";
import { YoungWmnReading } from "../assets/images";
import { SiShazam } from "react-icons/si";

const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="home-section-holder">
        <div className="home-section-text-holder">
          <div className="logo-holder">
            <SiShazam className="logo" />
            <h3>frontend solutions</h3>
          </div>
          <h1 className="home-section-title">Employee training hub</h1>
          <p className="home-section-text">
            Elevating tech talents into visionary leaders through innovative
            training and real-world experience.
          </p>
          <button className="home-btn">Start learning</button>
        </div>
        <YoungWmnReading className="home-section-img" />
      </div>
    </div>
  );
};

export default HomeSection;

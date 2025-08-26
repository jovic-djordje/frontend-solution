import { ContactImg } from "../assets/images";
import { SiShazam } from "react-icons/si";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-holder">
        <ContactImg className="contact-img" />
        <div className="contact-text-holder">
          <h2 className="contact-title">We can't wait to see you grow!</h2>
          <div className="contact-cta-holder">
            <p className="contact-text">
              For any questions about the program, please reach out to
            </p>
            <button className="contact-btn">hello@frontend.com</button>
            <div className="logo-holder cta-logo-holder">
              <SiShazam className="logo" />
              <h3>frontend solutions</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

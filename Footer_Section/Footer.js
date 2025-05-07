import "./footer.css";
import Overlay from "../Components/Overlay/Overlay";
import {
  FontAwesomeIcon,
  faLinkedin,
  faGithub,
  faGoogleDrive,
  faMapMarkerAlt,
  faMobile,
  faEnvelope,
} from "../Imports/ImportCenter";

export default function Footer() {
  return (
    <footer className="footer">
      <Overlay gradient="linear-gradient(to top, #0a0612 0%, #1a1029 100%)" />
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>
            I'm Mohamed ElSayed, a passionate front-end developer creating
            modern, responsive, and user-friendly designs. Let's build amazing
            digital experiences together!
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#portfolio">My Works</a>
            </li>
            <li>
              <a href="#contact">Send Message</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Me</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              moelsayed524@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon> (+2)
              01033866796
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Egypt,
              Sharkia, 10th of Ramadan
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/mohamed-elsayed-327b77244"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a
              href="https://drive.google.com/drive/u/0/home"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGoogleDrive}></FontAwesomeIcon>
            </a>
            <a
              href="https://github.com/MohamedEzz524"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 <span>Mohamed ElSayed</span>. Built with ❤️ and
          creativity.
        </p>
      </div>
    </footer>
  );
}

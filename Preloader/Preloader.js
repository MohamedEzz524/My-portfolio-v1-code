import "./preloader.css";
import { FontAwesomeIcon, faCode, faRocket } from "../Imports/ImportCenter";

export default function CrazyPreloader() {
  return (
    <div className="crazy-preloader ">
      <div className="preloader-content">
        <div className="tech-icons">
          <FontAwesomeIcon icon={faCode} className="icon" spin />
          <FontAwesomeIcon icon={faRocket} className="icon" bounce />
        </div>
        <div className="welcome-msg ">
          <div className="welcome-content">
            <h1 className="welcome-text">Welcome</h1>
            <p className="welcome-subtext">To My Portfolio Website</p>
            <div className="welcome-loader"></div>
          </div>
        </div>
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
